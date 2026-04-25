import { useState } from "react";

const galleryData = [
  {
    label: "Websites",
    value: "web",
    images: [
      { 
        type: "site",
        imageLink: "/projects/project6.png",
        link: "https://bulakenyo-spots.onrender.com" 
      },
      { 
        type: "site",
        imageLink: "/projects/project4.png",
        link: "https://beta.websiteadmin.thryv.com/preview/ad09cccaff65454fa71a0a1d1388a611?t=1756397959539&device=all" 
      },
      { 
        type: "site",
        imageLink: "/projects/WebDesign/BigBossLandingPAge.png",
        link: "https://coderex990.github.io/bigboss-diner-online/index.html" // Full res
      },
      { 
        type: "site",
        imageLink: "/projects/WebDesign/PanSnapLandingPage.png",
        link: "https://coderex990.github.io/Pansnap.E3-web/" 
      },
      { 
        type: "site",
        imageLink: "/projects/WebDesign/originalp.png",
        link: "https://coderex990.github.io/Charles-Online-Portfolio/" 
      },        
    ],
  },
  {
    label: "Logo",
    value: "logo",
    images: [
      { 
        type: "image",
        imageLink: "./projects/Logo/REXlangnew.jpg",
        link: "./projects/Logo/REXlangnew.jpg" 
      },
      { 
        type: "image",
        imageLink: "./projects/Logo/Omegalogo.jpg",
        link: "./projects/Logo/Omegalogo.jpg" 
      },          
      { 
        type: "image",
        imageLink: "./projects/Logo/BBlogo.png",
        link: "./projects/Logo/BBlogo.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Logo/gundam1.png",
        link: "/projects/Logo/gundam1.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Logo/gundam2.png",
        link: "/projects/Logo/gundam2.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Logo/CpE.png",
        link: "/projects/Logo/CpE.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Logo/EagleMC.png",
        link: "/projects/Logo/EagleMC.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Logo/sslogo.png",
        link: "/projects/Logo/sslogo.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Logo/SolaTech.png",
        link: "/projects/Logo/SolaTech.png" 
      },
    ],
  },
  {
    label: "Shirt Design",
    value: "shirt",
    images: [
      { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup Charizard2nd.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup Charizard2nd.png" 
      },
      { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup rex.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup rex.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup GojixMiku.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup GojixMiku.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup blastoise2nd.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup blastoise2nd.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup AMBROSE (1).png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup AMBROSE (1).png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup copy2.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup copy2.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup Org Shirt 3.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup Org Shirt 3.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup copy3.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup copy3.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Mockup Shirt Designs/Shirt Mockup copy6.png",
        link: "/projects/Mockup Shirt Designs/Shirt Mockup copy6.png" 
      },
    ],
  },
  {
    label: "Illustrations",
    value: "art",
    images: [
      { 
        type: "image",
        imageLink: "/projects/Illustrations/Gojira.jpg",
        link: "/projects/Illustrations/Gojira.jpg" 
      },
      { 
        type: "image",
        imageLink: "/projects/Illustrations/EasyPCZombieRobot.png",
        link: "/projects/Illustrations/EasyPCZombieRobot.png" 
      },
            { 
        type: "image",
        imageLink: "/projects/Illustrations/SPIT EXia box art.jpg",
        link: "/projects/Illustrations/SPIT EXia box art.jpg" 
      },
            { 
        type: "image",
        imageLink: "/projects/Illustrations/newcharles.jpg",
        link: "/projects/Illustrations/newcharles.jpg" 
      },
            { 
        type: "image",
        imageLink: "/projects/Illustrations/RLWart.png",
        link: "/projects/Illustrations/RLWart.png" 
      },
    ],
  },
  {
    label: "Layouts",
    value: "layout",
    images: [
      { 
        type: "site",
        imageLink: "./projects/Layout Design/ProductCatalog Mockup Layout.png",
        link: "https://online.fliphtml5.com/nhrsq/aejd/#p=1" 
      },
      { 
        type: "image",
        imageLink: "/projects/Layout Design/BigBossDinerMenuNormalPrice.jpg",
        link: "/projects/Layout Design/BigBossDinerMenuNormalPrice.jpg" // Full res
      }
    ],
  },
  {
    label: "Game Assets",
    value: "game",
    images: [
      { 
        type: "image",
        imageLink: "/projects/Game Asset/Awaken Cera Statue copy.png",
        link: "/projects/Game Asset/Awaken Cera Statue copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/Awaken Rex ptera copy.png",
        link: "/projects/Game Asset/Awaken Rex ptera copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/Awaken Rex Statue copy.png",
        link: "/projects/Game Asset/Awaken Rex Statue copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/Dino_Statue1 copy.png",
        link: "/projects/Game Asset/Dino_Statue1 copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/Ptera_Fountain_Statue.png",
        link: "/projects/Game Asset/Ptera_Fountain_Statue.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/mushroom1.png",
        link: "/projects/Game Asset/mushroom1.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/RibCage.png",
        link: "/projects/Game Asset/RibCage.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/Skeleton.png",
        link: "/projects/Game Asset/Skeleton.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/tree-house2 copy.png",
        link: "/projects/Game Asset/tree-house2 copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/tree-house1 copy.png",
        link: "/projects/Game Asset/tree-house1 copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/tree-house3 copy.png",
        link: "/projects/Game Asset/tree-house3 copy.png" // Full res
      },
      { 
        type: "image",
        imageLink: "/projects/Game Asset/tree-house4 copy 2.png",
        link: "/projects/Game Asset/tree-house4 copy 2.png" // Full res
      },      
    ],
  },
  // ... rest of your categories
];

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedImg, setSelectedImg] = useState(null);

  const handleItemClick = (e, item) => {
    if (item.type === "image") {
      e.preventDefault();
      setSelectedImg(item.link);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">My <span className="text-primary glow-text font-serif italic font-normal text-white">Other Works</span></h2>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 glass rounded-full max-w-fit mx-auto">
          {galleryData.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeTab === tab.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.find(t => t.value === activeTab)?.images.map((img, i) => (
            <a
              key={i}
              href={img.link}
              target={img.type === "site" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={(e) => handleItemClick(e, img)}
              className="group relative aspect-video rounded-default overflow-hidden border border-border glass animate-fade-in block"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img src={img.imageLink} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  {img.type === "site" ? "Visit Site" : "View Image"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-lg shadow-[0_0_50px_rgba(32,178,166,0.2)] border border-white/10" 
            alt="Full Preview"
          />
        </div>
      )}
    </section>
  );
};