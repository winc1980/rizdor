import React, { useEffect } from 'react';

export default function AddBlogsScript() {
    useEffect(() => {
        const handleLoadMore = () => {
            // ボタンの背景色を変更してクリックが反映されたことを示す
            const loadMoreButton = document.getElementById("load-more");
            if (loadMoreButton) {
                loadMoreButton.style.backgroundColor = "#f2911b"; // クリック後の色
                loadMoreButton.style.color = "#fff"; // テキストの色
            }

            // 左側と右側のカラムを取得
            const blogContainer = document.getElementById("blog-container");
            const leftSide = blogContainer.querySelector(".left_side");
            const rightSide = blogContainer.querySelector(".right_side");

            // 新しいBlogコンポーネントを作成して追加
            for (let i = 0; i < 3; i++) {
                const newBlog = document.createElement("div");
                newBlog.classList.add("blog-item");
                newBlog.innerHTML = "<Blog marginbottom='120px' />";
                if (i % 2 === 0) {
                    leftSide.appendChild(newBlog);
                } else {
                    rightSide.appendChild(newBlog);
                }
            }
        };

        const loadMoreButton = document.getElementById('load-more');
        if (loadMoreButton) {
            loadMoreButton.addEventListener('click', handleLoadMore);
        }

        // クリーンアップ関数
        return () => {
            if (loadMoreButton) {
                loadMoreButton.removeEventListener('click', handleLoadMore);
            }
        };
    }, []);

    return null;
}

