import { useEffect, useRef } from "react";

const Alert = ({showAlert}) => {
    const toastRef = useRef()
    const progressRef = useRef()
    let timer1, timer2;

    const showHandler = () => {
        const toast = toastRef.current
        const progress = progressRef.current
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 2000); //1s = 1000 milliseconds
        timer2 = setTimeout(() => {
            progress.classList.remove("active");
        }, 2400);
    };

    useEffect(() => {
        showHandler()
    }, [showAlert])
    // closeIcon.addEventListener("click", () => {
    //     toast.classList.remove("active");

    //     setTimeout(() => {
    //         progress.classList.remove("active");
    //     }, 300);

    //     clearTimeout(timer1);
    //     clearTimeout(timer2);
    // });
    return (
        <div ref={toastRef} className="toast active">
            <div className="toast-content">
                <i className="fas fa-solid fa-check check"></i>
                <div className="message">
                    <span className="text text-1">Success</span>
                    <span className="text text-2">Item added in your cart please check</span>
                </div>
            </div>
            <i className="fa-solid fa-xmark close"></i>
            {/* <!-- Remove 'active' className, this is just to show in Codepen thumbnail --> */}
            <div ref={progressRef} className="progress active"></div>
        </div>
    )
}

export default Alert