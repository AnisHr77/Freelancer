import { useEffect } from "react";

export default function UsersPage() {
    useEffect(() => {
        fetch("http://localhost:8001/api/users")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>قائمة المستخدمين</h1>

        </div>
    );
}
