import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <Logo size={28} className="text-teal" />
              <span className="text-lg font-bold tracking-wide">SNOWSY</span>
            </Link>
            <p className="text-white/50 leading-relaxed max-w-xs mb-6">
              Build faster. Scale smarter.
              <br />
              Software & platforms.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/snowsy-software/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <BsGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/snowsy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583716495959"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <BsFacebook className="text-lg" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/30 mb-6">Learn</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">API reference</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/30 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Our story</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Journal</a></li>
                <li><a href="mailto:hello@snowsy.dev" className="text-white/60 hover:text-white transition-colors">Say hello</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/30 mb-6">Policy</h4>
              <ul className="space-y-4">
                <li><a href="https://ucf.plus/en/regulation#users" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="https://ucf.plus/en/regulation#privacy" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="https://ucf.plus/en/regulation#intellectual" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Intellectual Property</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/40">
            Copyright &copy; SNOWSY SOFTWARE
          </p>
          <p className="text-sm text-white/40">
            Powered by{" "}
            <a
              href="https://vrh.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Vector Lab.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
