
export default function Footer () {

    return (
        <footer className="flex flex-col text-center min-w-[375px]">
            <p className="text-sm">
                Built using <a className="font-medium text-zinc-700  dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://react.dev/" target="_blank" rel="noreferrer noopener">React</a>, <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://nodejs.org/en" target="_blank" rel="noreferrer noopener">Node.js</a> and <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>. 
            </p>
            <p  className="text-sm pl-8 pr-8">
                Coded using <a className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener">Visual Studio Code</a> and deployed with <a  className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="" target="_blank" rel="noreferrer noopener">TBC</a>.
            </p>
            <></>
        </footer>
    )
}