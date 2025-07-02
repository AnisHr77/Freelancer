<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
<h2>Welcome Home!</h2>

<p>Hello, {{ Auth::user()->name }} ({{ Auth::user()->role }})</p>

<form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit">Logout</button>
</form>
</body>
</html>
