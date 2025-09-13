import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome to JejakSentul.id" />
            
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Welcome to JejakSentul.id
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your adventure begins here!
                    </p>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Homepage sections telah dibuat dan siap digunakan:
                        </p>
                        <ul className="text-left max-w-md mx-auto space-y-2">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                HeroSection
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                FeaturesSection
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                PopularRoutes
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                TestimonialsSection
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-6">
                            Implementasi lengkap ada di <code>resources/js/pages/homepage.tsx</code>
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}