import React, { useEffect } from "react";

const links = [
  { icon: "images/internet.png", label: "eclass", href: "https://learn.hansung.ac.kr/" },
  { icon: "images/speaker.png", label: "공지사항", href: "https://www.hansung.ac.kr/hansung/8385/subview.do" },
  { icon: "images/house.png", label: "홈페이지", href: "https://www.hansung.ac.kr/sites/hansung/index.do" },
  { icon: "images/information.png", label: "종정시", href: "https://info.hansung.ac.kr/" },
  { icon: "images/self-management.png", label: "자기관리", href: "https://hsportal.hansung.ac.kr/ko/" },
  { icon: "images/support.png", label: "지원센터", href: "https://www.hansung.ac.kr/sites/onestop/index.do" },
  { icon: "images/book.png", label: "도서관", href: "https://hsel.hansung.ac.kr/main_main.mir" },
  { icon: "images/clock.png", label: "에타", href: "https://everytime.kr/" },
];//링크 목록 정리리

const Popup: React.FC = () => {//팝업 컨포넌트트
  useEffect(() => {//이벤트 사용(등록) - 검색창에서 enter킬 또는 버튼 누르면 검색이 동작컴포넌트가 마운트 될때만 실행되고,언마운트시 이벤트 정리 해줌
    const input = document.getElementById("searchInput") as HTMLInputElement;
    const button = document.getElementById("searchButton") as HTMLButtonElement;

    if (!input || !button) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        search(input.value);
      }
    };

    const handleClick = () => {
      search(input.value);
    };

    input.addEventListener("keypress", handleKeyPress);
    button.addEventListener("click", handleClick);

    return () => {
      input.removeEventListener("keypress", handleKeyPress);
      button.removeEventListener("click", handleClick);
    };
  }, []);

  const search = (query: string) => {//검색어가 비어있지않으면 한성대 검색페이지를 열어 검색을 수행
    if (!query.trim()) return;
    const queryLink = `https://hansung.ac.kr/search/front/Search.jsp?qt=${query}`;
    window.open(queryLink, "_blank");
  };

  return (//밑부터는 대충 어떻게 생겼는가
    <div className="container">
      <div className="logo-container">
        <img src="images/hsu.png" />
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="검색어 입력" id="searchInput" />
        <button className="search-button" id="searchButton">검색</button>
      </div>

      <div className="grid">
        {links.map(({ icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="button">
            <div className="icon">
              <img src={icon} alt={label} />
            </div>
            <div className="text">{label}</div>
          </a>
        ))}
      </div>

      <div className="footer">
        Services developed by{" "}
        <a href="https://github.com/jaeseon510" target="_blank" rel="noopener noreferrer">
          jaeseon510
        </a>
      </div>
    </div>
  );
};

export default Popup;
