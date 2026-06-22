import React from "react";

function CertificatesPage() {
  const certificates = [
    {
      title: "OCI 2025 Generative AI Professional",
      issuer: "Oracle University",
      year: "Oct 2025",
      file: "/certificates/oracle-genai.pdf",
    },
    {
      title: "OCI 2025 AI Foundations Associate",
      issuer: "Oracle",
      year: "Aug 2025",
      file: "/certificates/oracle-foundation.pdf",
    },
    {
      title: "Programming Fundamentals using Python",
      issuer: "Infosys Springboard",
      year: "Sep 2025",
      file: "/certificates/python-springboard.pdf",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Industry-recognized certifications in AI, Cloud Computing,
          Python Programming and Software Development.
        </p>
      </div>

      <div className="space-y-5">

        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400"></span>

                  <span className="text-cyan-400 text-sm font-medium">
                    Certified
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>
              </div>

              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition whitespace-nowrap"
              >
                View Credential
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default CertificatesPage;