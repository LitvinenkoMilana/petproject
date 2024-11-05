import classes from './News.module.css';
import React, { useState } from "react";

const News = () => {
    const [showImage, setShowImage] = useState(false); //false передается в useState(скрыта картинка)
// showImage показывать ли картинку. Изначально она установлена в false
//  что означает, что картинка не отображается.

// setShowImage — это функция, которая используется для изменения состояния showImage.

    const toggleImage = () => {
        setShowImage(!showImage);
    }

    return (
        <div className="news-content">
            <p>News</p>
            <button onClick={toggleImage}>
                {showImage ? "Hide Image" : "Show Image"}
            </button>
            {/* если showImage равно true, то отображается элемент <img>, иначе — ничего не рендерится. */}
            {showImage && (
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax64dIaX16HJdARsturHqmPF0ZXJSNyjRTQ&s" 
                    alt="News" 
                    width="100" 
                    height="100" 
                />
            )}
        </div>
    );
}

export default News;