export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo */}
          <div>
            <h3 className="text-2xl font-serif mb-2">新山亭</h3>
            <p className="text-sm text-gray-400 tracking-wider">Towadako Shinzantei</p>
          </div>

          {/* Center: Address */}
          <div>
            <p className="text-sm mb-1">〒018-5501</p>
            <p className="text-sm mb-1">青森県十和田市</p>
            <p className="text-sm">十和田湖畔</p>
          </div>

          {/* Right: Contact */}
          <div>
            <p className="text-sm mb-1">TEL: 0176-XX-XXXX</p>
            <p className="text-sm">Email: info@towadako-shinzantei.jp</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Towadako Shinzantei. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
