<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
</head>
<body>
<h2>Welcome to the Admin Dashboard</h2>

<p>Hello, {{ Auth::user()->name }} ({{ Auth::user()->email }})</p>

<form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit">Logout</button>
</form>
</body>
</html>
