export default function Footer(){
    const date = new Date().getUTCFullYear();
    return(
        <footer className="mt-10 bg-green-50 w-full fixed bottom-0">
            <div className="text-center py-4 text-green-400 font-semibold">
                &copy; {date} Glow Skin. All rights reserved.
            </div>
        </footer>
    )
}