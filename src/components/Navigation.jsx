const nav = {
  padding: "1.5em",
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",

  position: "absolute",
  top: 0,
  left: 0,
};

const logo = {
  width: "50px",
  height: "50px",
  transform: "rotate(90deg)",
  padding: "0",
  cursor: "pointer",
};

const form = {
  backgroundColor: "#fff",
  padding: "3px 10px",
  borderRadius: "100px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const form_input = {
  padding: "5px",
  fontSize: "1.2rem",
  outline: "none",
  border: "none",
};

const form_clear_btn = {
  width: "37px",
  height: "37px",
  transform: "translateX(6px)",
  fill: "var(--red-light)",
};

/**
 * Navigation component renders a responsive navigation bar.
 *
 * It displays a home icon or logo when on the home page.
 * On list pages it shows a search input.
 * It conditionally shows the suspense count.
 *
 * @component
 */
export default function Navigation({ page, setPage, suspense }) {
  return (
    <nav style={nav}>
      <div>
        {page === "home" ? (
          <svg
            fill={"var(--yellow)"}
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            role="img"
            style={logo}
          >
            <path d="M18.09 14.696a6.574 6.574 0 0 0-3.381 3.399l4.27.883-.886-4.282h-.003zM2.475 8.317 0 5.85A11.26 11.26 0 0 1 5.823 0h.006l2.469 2.463a11.224 11.224 0 0 1 4.463-.921C18.967 1.542 24 6.569 24 12.771 24 18.973 18.967 24 12.761 24 6.551 24 1.52 18.976 1.52 12.771c0-1.591.355-3.081.952-4.451l9.143 9.114a11.267 11.267 0 0 1 5.823-5.85l-9.135-9.12h-.008a11.285 11.285 0 0 0-5.823 5.85l.003.003z" />
          </svg>
        ) : (
          <svg
            fill="var(--yellow)"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            style={{ ...logo, transform: "rotate(0deg)" }}
            onClick={() => setPage("home")}
          >
            <g>
              <g>
                <path
                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499
			l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933
			l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333
			S395.776,277.333,384,277.333z"
                />
              </g>
            </g>
          </svg>
        )}
      </div>

      {page == "list" && suspense.length > 0 && (
        <form action="" style={form}>
          <input type="text" style={form_input} placeholder="Search..." />
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="-1.7 0 20.4 20.4"
            style={form_clear_btn}
          >
            <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z" />
          </svg>
        </form>
      )}
    </nav>
  );
}
