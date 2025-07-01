<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Register</title>
</head>
<body>

<h2>Register</h2>

@if ($errors->any())
    <div style="color: red;">
        <ul>
            @foreach ($errors->all() as $err)
                <li>{{ $err }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form method="POST" action="{{ route('register') }}">
    @csrf

    <label>Name</label><br>
    <input type="text" name="name" placeholder="Name"><br>

    <label>Email</label><br>
    <input type="email" name="email" placeholder="Email"><br>

    <label>Password</label><br>
    <input type="password" name="password" placeholder="Password"><br>

    <label>Confirm Password</label><br>
    <input type="password" name="password_confirmation" placeholder="Confirm Password"><br>

    <label>Role</label><br>
    <select name="role">
        <option value="client">Client</option>
        <option value="freelancer">Freelancer</option>
    </select><br><br>

    <button type="submit">Register</button>
</form>

<p><a href="/login">Already have an account?</a></p>

</body>
</html>
