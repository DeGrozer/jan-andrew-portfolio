export function ExplorationsSection() {
    return (
        <section id="explorations" className="container-editorial min-h-[calc(100svh-5rem)] scroll-mt-24 pb-16 pt-16 md:pb-24 md:pt-24" aria-labelledby="explorations-heading">
            <div className="section-intro mb-6 md:mb-8">
                <h2 data-interactive-reveal id="explorations-heading" className="section-heading headline-serif text-5xl md:text-7xl"><span className="exploration-heading-word">Other</span>{" "}<span className="exploration-heading-word">things</span>{" "}<span className="exploration-heading-word">I</span>{" "}<span className="exploration-heading-word">like.</span></h2>
            </div>

            <div className="editorial-essay-block mt-2 md:mt-3">
                <p className="editorial-essay" data-interactive-reveal="down" data-interactive-float>
                    Whenever I want to rewrite something, I go to <a className="exploration-word-link" href="https://degrozer.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a> and let it become a place to think out loud. I maintain <a className="exploration-word-link" href="https://en.wikipedia.org/wiki/Gy%C3%B6rgy_Grozer" target="_blank" rel="noopener noreferrer">György Grozer&apos;s Wikipedia page</a> because I like the discipline of learning and writing in a public space. I log my reviews on <a className="exploration-word-link" href="https://letterboxd.com/janandroo/" target="_blank" rel="noopener noreferrer">Letterboxd</a> and keep track of what I watch, what I like, and what I want to revisit. I use <a className="exploration-word-link" href="https://discord.com/@pl0p" target="_blank" rel="noopener noreferrer">Discord</a> to meet international friends and stay in touch with people from across the world; I have made so many friends there. I study cybersecurity in my free time, including completing TCM Security&apos;s <a className="exploration-word-link" href="https://www.youtube.com/@TCMSecurityAcademy" target="_blank" rel="noopener noreferrer">15-hour Ethical Hacking course</a> last year, and I continue exploring through hands-on labs with VMware, VirtualBox, pfSense, and Metasploitable Linux. I experiment on <a className="exploration-word-link" href="https://codepen.io/iamAndrew1" target="_blank" rel="noopener noreferrer">CodePen</a> when I want to test ideas quickly. I keep honing my skills on Photoshop, even if I am not the most artistically gifted person in the room. <a className="exploration-word-link" href="https://drive.google.com/drive/folders/1eNx9U_Y8nQo2dK1kl6m76KvRNAxorqJG?usp=drive_link" target="_blank" rel="noopener noreferrer">View edits here.</a>
                </p>
            </div>
        </section>
    );
}