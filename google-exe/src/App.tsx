import React from "react";

const links = [
  { icon: "images/car.webp", label: "eclass", href: "https://learn.hansung.ac.kr/" },
  { icon: "images/car.webp", label: "공지사항", href: "https://www.hansung.ac.kr/hansung/8385/subview.do" },
  { icon: "images/car.webp", label: "홈페이지", href: "https://www.hansung.ac.kr/sites/hansung/index.do" },
  { icon: "images/car.webp", label: "종정시", href: "https://info.hansung.ac.kr/" },
  { icon: "images/car.webp", label: "자기관리", href: "https://hsportal.hansung.ac.kr/ko/" },
  { icon: "images/car.webp", label: "지원센터", href: "https://www.hansung.ac.kr/sites/onestop/index.do" },
  { icon: "images/car.webp", label: "도서관", href: "https://hsel.hansung.ac.kr/main_main.mir" },
  { icon: "images/car.webp", label: "에타", href: "https://everytime.kr/" },
];

const Popup: React.FC = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img src="images/hsu.png" />
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="검색어 입력" />
        <button className="search-button">검색</button>
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

      <div className="footer">Services developed by <a href="https://github.com/jaeseon510" target="_blank">jaeseon510</a></div>
    </div>
  );
};

export default Popup;
