function Project({description, title, link, pic}: {description: string, title: string, link: string, pic: any}) {
return <div>
          <div>
            <div
              className="bg-cover bg-center h-60 group z-10 items-center overflow-hidden"
              style={{ backgroundImage: `url(${pic})` }}
            >
              <div className="grid z-20 items-center duration-500 justify-center w-full transition-all h-60 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70">
                <div className="h-30 text-white transition-all duration-500 translate-y-[50%] group-hover:translate-y-0">
                  <p className="text-sm p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {description}
                  </p>
                  <a
                    className="self-center"
                    href={link}
                  >
                    <button className="text-white text-xs sm:text-sm rounded-none p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <h2 className="text-lg">{title}</h2>
          </div>
</div>
}
export default Project