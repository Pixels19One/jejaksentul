import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome to JejakSentul.id" />
            
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Welcome to JejakSentul.id
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Your adventure begins here!
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                ✅ Homepage Sections Complete
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Semua section homepage telah dibuat dan siap digunakan:
                            </p>
                            <ul className="text-left space-y-3">
                                <li className="flex items-center">
                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                    <span className="font-medium">HeroSection</span> - Video background & CTA
                                </li>
                                <li className="flex items-center">
                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                    <span className="font-medium">FeaturesSection</span> - 8 fitur utama
                                </li>
                                <li className="flex items-center">
                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                    <span className="font-medium">PopularRoutes</span> - Grid jalur trekking
                                </li>
                                <li className="flex items-center">
                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                    <span className="font-medium">TestimonialsSection</span> - Auto-sliding carousel
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                🚀 Ready to Use
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Implementasi lengkap tersedia di:
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                <code className="text-sm">
                                    resources/js/pages/homepage.tsx
                                </code>
                            </div>
                            <p className="text-gray-600 text-sm">
                                File ini sudah include SEO optimization, responsive design, 
                                dan WhatsApp integration.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-2">
                            Next Steps
                        </h4>
                        <p className="text-blue-800">
                            Siap untuk melanjutkan ke <strong>Create Trekking Pages</strong> untuk membuat 
                            halaman list jalur trekking dan detail pages dengan booking form.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
