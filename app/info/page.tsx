export default function InfoPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-12">

        {/* Quote */}
        <p className="text-neutral-300 italic leading-relaxed">
          Dryck som är guld<br />
          Kallas för gulddryck
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-neutral-600 mx-auto" />

        {/* Info */}
        <div className="space-y-6 text-sm tracking-wide">

          <div>
            <p className="uppercase text-neutral-400 mb-1">Samling</p>
            <p>Frans Henriksgatan 5B</p>
          </div>

          <div>
            <p className="uppercase text-neutral-400 mb-1">Tid</p>
            <p>31/12 18.00 sharp</p>
          </div>

          <div>
            <p className="uppercase text-neutral-400 mb-1">Mat & dryck</p>
            <p>Tillhandahålls</p>
            <p className="text-neutral-400">Medtag extra dryck</p>
          </div>

        </div>

        {/* RSVP */}
        <div className="pt-6 flex justify-center">
          <a
            href="/rsvp"
            className="
              px-10 py-3 rounded-full
              border border-neutral-500
              text-neutral-200 tracking-widest
              hover:border-neutral-300
              transition
            "
          >
            RSVP
          </a>
        </div>

      </div>
    </main>
  );
}
