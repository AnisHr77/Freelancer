<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Register</title>
</head>
<body>

@if(session('success'))
    <p style="color: green;">{{ session('success') }}</p>
@endif

<form method="POST" action="{{ route('register') }}">
    @csrf

    <label>Name:</label>
    <input type="text" name="name" required><br>

    <label>Email:</label>
    <input type="email" name="email" required><br>

    <label>Password:</label>
    <input type="password" name="password" required><br>

    <label>Confirm Password:</label>
    <input type="password" name="password_confirmation" required><br>

    <button type="submit">Register</button>
</form>

</body>
</html>
