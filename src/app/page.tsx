"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#FAF8F5] overflow-x-hidden w-full max-w-[100vw]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#B8A896]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#A69076]/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-[#8B7355] text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            A letter for you
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-[#5C4A3A] mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Happy Birthday,
            <span className="block mt-2 font-medium italic">Keza</span>
          </h1>

          <div
            className="w-16 h-[1px] bg-[#A69076] mx-auto mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          />

          <p
            className="text-[#5C4A3A] text-lg md:text-xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            I spent almost all night trying to write this. And honestly? I still don&apos;t think
            these words are enough. Keep scrolling, cherie.
          </p>
        </div>

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-float"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <div className="w-6 h-10 border-2 border-[#A69076] rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#A69076] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Why This Exists Section - Diagonal */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#B8A896] diagonal-top-bottom" />
        <div className="relative z-10 max-w-2xl mx-auto text-center animate-on-scroll">
          <p className="text-[#5C4A3A] text-xs tracking-[0.3em] uppercase mb-6">
            Why this website exists
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#3D322A] mb-8 leading-relaxed">
            I&apos;m not on social media. No Instagram. No Twitter. No Facebook.
          </h2>
          <p className="text-[#4A3D32] text-lg leading-loose mb-6">
            So when your birthday came, I couldn&apos;t just &quot;post&quot; you like everyone else does.
            I couldn&apos;t drop a photo with a caption and call it love.
          </p>
          <p className="text-[#4A3D32] text-lg leading-loose mb-6">
            That&apos;s not enough for you. You deserve more.
          </p>
          <p className="text-[#2C241C] text-xl leading-loose">
            So I did what I know how to do. I built you something. This is my post, cherie.
            This whole website. Just for you.
          </p>
        </div>
      </section>

      {/* The Struggle Section */}
      <section className="py-24 px-6 bg-[#FDF9F3]">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <p className="text-[#5C4A3A] text-lg md:text-xl leading-loose">
            Cherie, you need to know something. I sat here for hours. HOURS.
            Trying to figure out how to tell you what you mean to me. I wrote paragraphs
            and deleted them. Wrote again. Deleted again. Started over. Over and over.
            Because every time I read what I wrote, it felt too small. Too ordinary.
            And you? You are anything but ordinary.
          </p>

          <p className="text-[#5C4A3A] text-lg md:text-xl leading-loose mt-8">
            My heart was bursting. Like a big bang happening inside my chest.
            And yet the words on my screen looked like whispers trying to describe thunder.
            At one point, I looked at what I had written and realized I had basically
            written a novel. A whole book. I had to cut things out, cherie.
            I had to use my summary skills just to make this readable. And even now,
            I feel like I left out chapters. CHAPTERS of how much I love you.
          </p>

          <p className="text-[#5C4A3A] text-lg md:text-xl leading-loose mt-8">
            But I wasn&apos;t satisfied. So I wrote more.
          </p>
        </div>
      </section>

      {/* Photo Feature - Her Solo */}
      <section className="py-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="relative group">
            <div className="aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src="/IMG_5679.jpg"
                alt="Keza"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 image-animate"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#A89580] text-[#2C241C] px-6 py-4 md:px-8 md:py-5 rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-lg">
              <p className="text-sm md:text-base font-light italic">&quot;You are my favorite view.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Message Section */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#5C4A3A] mb-12 text-center animate-on-scroll">
            So let me try again, cherie.
          </h2>

          <div className="space-y-8 text-[#5C4A3A] text-lg md:text-xl leading-loose">
            <p className="animate-on-scroll">
              Keza. You are the most beautiful soul I have ever encountered. And I don&apos;t just mean
              your face, though that stops my heart too. I mean your HEART. The way you love,
              the way you care, the way you show up for people without expecting anything in return.
              I have never seen anyone like you. Never.
            </p>

            <p className="animate-on-scroll">
              You have this warmth that pulls people in. Once they experience your love,
              they don&apos;t forget it. That&apos;s not something you learn, cherie. That&apos;s something
              God placed inside you. That&apos;s His presence shining through everything you do.
            </p>

            <p className="animate-on-scroll">
              I know how much you love Him. I know you worship. I know that beautiful voice
              of yours rises up and touches heaven when you sing. I haven&apos;t been there to see
              it in person yet. But just knowing that about you? Knowing you&apos;re a woman who
              stands before God and pours out her heart in praise? That makes me fall deeper
              for you every single time I think about it.
            </p>

            <p className="animate-on-scroll">
              You are God&apos;s daughter, through and through. Your faith isn&apos;t for show.
              It&apos;s not a Sunday thing. It&apos;s your foundation. It&apos;s who you ARE.
              And I admire that more than you know.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid - Memories - Diagonal */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#E8DFD5] diagonal-bottom-top" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-center text-[#8B7355] text-xs tracking-[0.3em] uppercase mb-12 animate-on-scroll">
            Moments with you
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="aspect-square rounded-xl overflow-hidden relative group animate-on-scroll shadow-lg">
              <Image src="/IMG_5675.jpg" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group animate-on-scroll shadow-lg" style={{ transitionDelay: "0.1s" }}>
              <Image src="/IMG_5336.jpg" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group animate-on-scroll shadow-lg" style={{ transitionDelay: "0.2s" }}>
              <Image src="/IMG_5339.jpg" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group animate-on-scroll shadow-lg" style={{ transitionDelay: "0.3s" }}>
              <Image src="/IMG_5066.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group animate-on-scroll shadow-lg" style={{ transitionDelay: "0.4s" }}>
              <Image src="/IMG_5068.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group animate-on-scroll shadow-lg" style={{ transitionDelay: "0.5s" }}>
              <Image src="/IMG_5069.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto space-y-8 text-[#5C4A3A] text-lg md:text-xl leading-loose">
          <p className="animate-on-scroll">
            Cherie, you keep me going. When I&apos;m tired, you&apos;re there. When I&apos;m doubting myself,
            you speak life into me. When I feel like giving up, somehow you always know
            the right words to say. You give me strength I didn&apos;t know I had. You give me hope
            when I&apos;m running low. You believe in me even when I&apos;m struggling to believe in myself.
          </p>

          <p className="animate-on-scroll">
            That kind of love? That kind of presence? It&apos;s rare, cherie. YOU are rare.
          </p>

          <p className="animate-on-scroll">
            And yes. I have to say it. You&apos;re mean too. Don&apos;t act like you don&apos;t know
            what I&apos;m talking about. That fire. That attitude. That &quot;don&apos;t test me&quot; energy.
            Cherie, I LOVE it. You keep me on my toes. You don&apos;t let me get away with nonsense.
            You challenge me. You check me. And that&apos;s exactly what I need. A woman who can
            love me deeply AND put me in my place. You do both so well.
          </p>

          <p className="animate-on-scroll">
            You&apos;re soft where it matters, but strong where it counts.
          </p>
        </div>
      </section>

      {/* Featured Photo - Us Together - Diagonal */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#A89580] diagonal-top-bottom" />
        <div className="relative z-10 max-w-4xl mx-auto animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative order-2 md:order-1 group shadow-2xl">
              <Image src="/IMG_5742.JPG" alt="Us together" fill className="object-cover transition-transform duration-700 group-hover:scale-105 image-animate" />
            </div>
            <div className="text-[#2C241C] order-1 md:order-2">
              <p className="text-[#4A3D32] text-xs tracking-[0.3em] uppercase mb-4">
                My favorite person
              </p>
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
                There&apos;s no version of my future that doesn&apos;t have you in it.
              </p>
              <p className="text-[#3D322A] leading-relaxed">
                Every plan I make, you&apos;re there. Every dream I dream, you&apos;re in the frame.
                You&apos;re not just part of my life, cherie. You ARE my life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto space-y-8 text-[#5C4A3A] text-lg md:text-xl leading-loose">
          <p className="animate-on-scroll">
            Cherie, you&apos;re not just my girlfriend. You&apos;re my PARTNER. You are my CEO.
            Everything I touch, you touch. Every business, every dream, every vision. It&apos;s OURS.
            You don&apos;t watch from the sidelines. You&apos;re IN it with me. Hands dirty. Mind sharp.
            Heart invested.
          </p>

          <p className="animate-on-scroll">
            That&apos;s not a girlfriend. That&apos;s a wife mentality. And I see it, cherie. I see YOU.
          </p>

          <p className="animate-on-scroll">
            And KEOMI? Cherie, KEOMI is going to take over the world. I&apos;m not just saying that
            because I love you. I&apos;m saying it because I KNOW it. Your vision, your creativity,
            your drive. It&apos;s already special. But it&apos;s not stopping there. One day, people
            everywhere will know the name KEOMI. And behind it? A woman of God. A woman of faith.
            A woman who prays and builds. A woman who worships and works.
          </p>

          <p className="animate-on-scroll">
            I believe it with everything in me. And I&apos;ll be right there, cherie.
            Building with you. Celebrating with you. Telling everyone &quot;that&apos;s MY woman.&quot;
          </p>
        </div>
      </section>

      {/* More Photos - Horizontal Scroll Gallery */}
      <section className="py-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#8B7355] text-xs tracking-[0.3em] uppercase mb-8 animate-on-scroll">
            More of you
          </p>

          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-[#B8A896] flex items-center justify-center text-[#8B7355] hover:bg-[#B8A896] hover:text-[#FAF8F5] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-[#B8A896] flex items-center justify-center text-[#8B7355] hover:bg-[#B8A896] hover:text-[#FAF8F5] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/IMG_5773.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/IMG_5779.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/IMG_5095.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/IMG_5138.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/IMG_5739.JPG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/IMG_4848.jpeg" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/6B83AA60-10B9-43B8-A932-2E3B93310CDE.PNG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
            <div className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden relative group snap-start shadow-lg">
              <Image src="/E741BA4E-FC33-48E0-B0D7-2C4826B4DBC7.PNG" alt="Keza" fill className="object-cover transition-transform duration-500 group-hover:scale-110 image-animate" />
            </div>
          </div>
        </div>
      </section>

      {/* Wishes Section - Diagonal */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#E8DFD5] diagonal-bottom-top" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#5C4A3A] mb-12 text-center animate-on-scroll">
            What I wish for you, cherie
          </h2>

          <div className="space-y-6 text-[#5C4A3A] text-lg md:text-xl">
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you peace. The kind that stays even when things get hard.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you joy that overflows. Not just on good days, but even in the waiting seasons.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you success beyond your wildest dreams. May KEOMI become everything
              you&apos;ve envisioned and MORE. May doors open for you that no one can shut.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you health and strength. In your body, in your mind, in your spirit.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you a faith that keeps growing deeper. May your relationship with God
              continue to flourish and may He always be your anchor.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you love that never runs dry. And cherie, I plan to be a big part
              of making sure that happens.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you laughter. The kind that makes your stomach hurt and your eyes water.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you confidence. May you always see yourself the way God sees you,
              the way I see you. Beautiful. Worthy. Unstoppable.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you fulfilled dreams. Every single one. The ones you&apos;ve told me about
              and the secret ones you keep in your heart.
            </p>
            <p className="pl-6 border-l-2 border-[#B8A896] animate-on-scroll hover:border-[#8B7355] hover:pl-8">
              I wish you a life so beautiful that when you look back one day,
              you&apos;ll smile and say &quot;God really did that for me.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section - Diagonal */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#A89580] diagonal-top-bottom" />
        <div className="relative z-10 max-w-2xl mx-auto text-center animate-on-scroll">
          <p className="text-[#3D322A] text-lg md:text-xl leading-loose mb-8">
            Cherie, you deserve all of this and more. So much more.
          </p>

          <p className="text-[#3D322A] text-lg md:text-xl leading-loose mb-8">
            You are faith wrapped in beauty. Strength covered in softness. Fire mixed with grace.
          </p>

          <p className="text-[#2C241C] text-lg md:text-xl leading-loose mb-12">
            I have never met anyone like you. And I know I never will again. You are THE ONE.
          </p>

          <div className="w-16 h-[1px] bg-[#5C4A3A] mx-auto mb-12" />

          <p className="text-3xl md:text-4xl font-light text-[#2C241C] mb-4">
            Happy Birthday, cherie.
          </p>

          <p className="text-[#3D322A] text-lg mb-12">
            You are mine. And I am yours. Forever.
          </p>

          <p className="text-xl italic text-[#4A3D32]">
            With all my love,
          </p>
          <p className="text-2xl font-medium mt-3 tracking-[0.1em] text-[#2C241C]">
            ORRTO BLEND
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center bg-[#FAF8F5]">
        <p className="text-[#A69076] text-xs tracking-[0.2em] uppercase mb-4">
          Not a social media post
        </p>
        <p className="text-[#5C4A3A] text-sm">
          A whole website, built just for you
        </p>
        <p className="text-[#8B7355] text-xs mt-6">
          Made with love by someone who doesn&apos;t post, but builds
        </p>
      </footer>

      <style jsx global>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .diagonal-top-bottom {
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        }

        .diagonal-bottom-top {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }
      `}</style>
    </main>
  );
}
