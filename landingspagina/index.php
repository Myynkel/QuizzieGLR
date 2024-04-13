<?php
// Initialize session
session_start();

// File path for storing user data
$userDataFile = 'userdata.json';

// Function to read user data from JSON file
function readUserData() {
    global $userDataFile;
    if (file_exists($userDataFile)) {
        $json_data = file_get_contents($userDataFile);
        return json_decode($json_data, true);
    } else {
        return [];
    }
}

// Function to write user data to JSON file
function writeUserData($data) {
    global $userDataFile;
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($userDataFile, $json_data);
}

// Function to sanitize user input
function sanitizeInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

// Login process
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $username = sanitizeInput($_POST['username']);
    $password = sanitizeInput($_POST['password']);

    // Read user data from JSON file
    $users = readUserData();

    if (isset($users[$username]) && $users[$username] === $password) {
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");
    } else {
        $login_error = "Invalid username or password";
    }
}

// Signup process
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $username = sanitizeInput($_POST['username']);
    $password = sanitizeInput($_POST['password']);

    // Read user data from JSON file
    $users = readUserData();

    if (!isset($users[$username])) {
        // Add new user to the array
        $users[$username] = $password;
        // Write updated user data back to JSON file
        writeUserData($users);
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");
    } else {
        $signup_error = "Username already exists";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login and Signup</title>
</head>
<body>
<h2>Login</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" name="login" value="Login">
</form>
<?php if(isset($login_error)) { echo $login_error; } ?>

<h2>Signup</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" name="signup" value="Signup">
</form>
<?php if(isset($signup_error)) { echo $signup_error; } ?>
</body>
</html>
