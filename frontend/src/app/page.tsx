import ClientLayout from '@/components/ClientLayout';

export default function HomePage() {
    return (
        <ClientLayout>
            <section className="p-8">
                <h1 className="text-3xl font-bold text-blue-600">Welcome to GigNation</h1>
                <p>This is your homepage content.</p>
            </section>
        </ClientLayout>
    );
}
