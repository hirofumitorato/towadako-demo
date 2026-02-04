import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen pt-32 pb-20 container mx-auto px-6">
            <div className="mb-8 text-sm text-gray-500 font-serif tracking-widest">
                <Link href="/" className="hover:text-gray-800 transition-colors">ホーム</Link>
                <span className="mx-2">&gt;</span>
                <span>お風呂・温泉</span>
            </div>
            <h1 className="text-4xl font-serif font-medium mb-12">お風呂・温泉</h1>
            <div className="w-full aspect-video bg-gray-200 rounded-sm flex items-center justify-center mb-8">
                <span className="text-gray-400">Hero Image Placeholder</span>
            </div>
            <p className="text-center text-gray-500">準備中</p>
        </main>
    )
}
