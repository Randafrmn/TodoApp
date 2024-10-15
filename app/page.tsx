
export default function Home() {
  const images = {
    desktopLight: "/images/bg-desktop-light.jpg",
    desktopDark: "/images/bg-desktop-dark.jpg",
  };

  return (
    <div className="w-screen h-64 bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]"
        style={{ 
          backgroundImage: `url(${images.desktopLight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
         }}
    >
    
    </div>
  )
}
