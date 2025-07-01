<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
<h2>User Registration</h2>

@if(session('success'))
    <p style="color: green;">{{ session('success') }}</p>
@endif

<form method="POST" action="/register">
    @csrf
    <div>
        <label>Name:</label>
        <input type="text" name="name">
        @error('name') <span style="color:red">{{ $message }}</span> @enderror
    </div>
    <div>
        <label>Email:</label>
        <input type="email" name="email">
        @error('email') <span style="color:red">{{ $message }}</span> @enderror
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password">
        @error('password') <span style="color:red">{{ $message }}</span> @enderror
    </div>
    <button type="submit">Register</button>
</form>
</body>
</html>
