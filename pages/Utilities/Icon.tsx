function SchoolIcon({size}:{size:number}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : "800"}
        height={size ? size : "800"}
        viewBox="0 0 1024 1024"
      >
        <path d="M224 128v704h576V128H224zm-32-64h640a32 32 0 0132 32v768a32 32 0 01-32 32H192a32 32 0 01-32-32V96a32 32 0 0132-32z"></path>
        <path d="M64 832h896v64H64zm256-640h128v96H320z"></path>
        <path d="M384 832h256v-64a128 128 0 10-256 0v64zm128-256a192 192 0 01192 192v128H320V768a192 192 0 01192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"></path>
      </svg>
    );
  }
  function Book({size}:{size:number}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : 800}
        height={size ? size : 800}
        version="1"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
      >
        <path fill="#F9EBB2" d="M56 62H10a4 4 0 010-8h46v8z"></path>
        <g fill="#45AAB8">
          <path d="M6 4v49.537A5.968 5.968 0 0110 52h2V2H8a2 2 0 00-2 2zM56 2H14v50h44V4a2 2 0 00-2-2z"></path>
        </g>
        <g fill="#394240">
          <path d="M60 52V4c0-2.211-1.789-4-4-4H8C5.789 0 4 1.789 4 4v54a6 6 0 006 6h49a1 1 0 100-2h-1v-8a2 2 0 002-2zM6 4a2 2 0 012-2h4v50h-2a5.968 5.968 0 00-4 1.537V4zm50 58H10a4 4 0 010-8h46v8zm0-10H14V2h42a2 2 0 012 2v48h-2z"></path>
          <path d="M43 26H23a1 1 0 100 2h20a1 1 0 100-2zM49 20H23a1 1 0 100 2h26a1 1 0 100-2zM23 16h12a1 1 0 100-2H23a1 1 0 100 2z"></path>
        </g>
        <path
          fill="#231F20"
          d="M6 4v49.537A5.968 5.968 0 0110 52h2V2H8a2 2 0 00-2 2z"
          opacity="0.2"
        ></path>
      </svg>
    );
  }
  


  function Chart({size}:{size:number}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : "800"}
        height={size ? size : "800"}
        version="1"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
      >
        <path
          fill="#F9EBB2"
          d="M62 60a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h56a2 2 0 012 2v56z"
        ></path>
        <g fill="#394240">
          <path d="M60 0H4C1.789 0 0 1.789 0 4v56c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zm2 60a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h56a2 2 0 012 2v56z"></path>
          <path d="M35 8h-6a1 1 0 00-1 1v47h8V9a1 1 0 00-1-1zm-1 46h-4V40h4v14zm0-16h-4V10h4v28zM25 16h-6a1 1 0 00-1 1v39h8V17a1 1 0 00-1-1zm-1 38h-4V44h4v10zm0-12h-4V18h4v24zM55 24h-6a1 1 0 00-1 1v31h8V25a1 1 0 00-1-1zm-1 30h-4V44h4v10zm0-12h-4V26h4v16zM45 32h-6a1 1 0 00-1 1v23h8V33a1 1 0 00-1-1zm-1 22h-4v-6h4v6zm0-8h-4V34h4v12zM15 24H9a1 1 0 00-1 1v31h8V25a1 1 0 00-1-1zm-1 30h-4v-6h4v6zm0-8h-4V26h4v20z"></path>
        </g>
        <path fill="#B4CCB9" d="M10 26H14V46H10z"></path>
        <path fill="#45AAB8" d="M20 18H24V42H20z"></path>
        <path fill="#F76D57" d="M40 34H44V46H40z"></path>
        <path fill="#45AAB8" d="M30 40H34V54H30z"></path>
        <path fill="#B4CCB9" d="M50 26H54V42H50z"></path>
        <path fill="#45AAB8" d="M30 10H34V38H30z"></path>
        <path fill="#B4CCB9" d="M10 48H14V54H10z"></path>
        <path fill="#F76D57" d="M40 48H44V54H40z"></path>
        <path fill="#B4CCB9" d="M50 44H54V54H50z"></path>
        <path fill="#45AAB8" d="M20 44H24V54H20z"></path>
        <g opacity="0.2">
          <path d="M30 40H34V54H30z"></path>
          <path d="M10 48H14V54H10z"></path>
          <path d="M40 48H44V54H40z"></path>
          <path d="M50 44H54V54H50z"></path>
          <path d="M20 44H24V54H20z"></path>
        </g>
      </svg>
    );
  }

  function Chemic({size}:{size:number}) {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 218.425 218.425"
          xmlSpace="preserve"
          width={size?size:800}
          height={size?size:800}
        >
          <path
            fill="#F2E5A2"
            d="M32.484 158.918l-6.791 47.896a2.604 2.604 0 005.154.732l6.896-48.629h-5.259v.001z"
          ></path>
          <path d="M28.272 210.784a3.607 3.607 0 01-3.57-4.109l6.791-47.897a1 1 0 01.99-.859h5.26a1 1 0 01.99 1.141l-6.896 48.629a3.62 3.62 0 01-3.565 3.095zm5.08-50.866l-6.669 47.037a1.606 1.606 0 001.36 1.813 1.608 1.608 0 001.813-1.362l6.735-47.487h-3.239v-.001z"></path>
          <path
            fill="#F2E5A2"
            d="M67.127 158.918l6.793 47.896a2.604 2.604 0 01-5.154.732l-6.896-48.629h5.257v.001z"
          ></path>
          <path d="M71.338 210.784a3.617 3.617 0 01-3.563-3.098l-6.896-48.628a.999.999 0 01.99-1.141h5.258a1 1 0 01.99.859l6.793 47.896c.135.954-.109 1.902-.688 2.672s-1.423 1.268-2.376 1.402a3.38 3.38 0 01-.508.038zm-8.318-50.866l6.735 47.488c.121.86.922 1.482 1.812 1.361.424-.06.799-.281 1.056-.624.258-.343.366-.765.307-1.189l-6.671-47.036H63.02z"></path>
          <path
            fill="#F2E5A2"
            d="M101.763 158.918L90.65 214.309a2.603 2.603 0 005.103 1.025l11.32-56.416h-5.31z"
          ></path>
          <path d="M93.205 218.425a3.608 3.608 0 01-3.535-4.313l11.113-55.39a1 1 0 01.98-.804h5.311a1 1 0 01.98 1.196l-11.32 56.416a3.611 3.611 0 01-3.529 2.895zm9.378-58.507L91.63 214.505a1.606 1.606 0 001.256 1.888 1.608 1.608 0 001.887-1.256l11.08-55.219h-3.27z"></path>
          <path
            fill="#F2E5A2"
            d="M181.593 158.918l11.113 55.391a2.603 2.603 0 01-5.103 1.025l-11.32-56.416h5.31z"
          ></path>
          <path d="M190.152 218.425a3.611 3.611 0 01-3.529-2.894l-11.32-56.417a.999.999 0 01.98-1.196h5.311c.477 0 .887.336.98.804l11.113 55.391a3.607 3.607 0 01-3.535 4.312zm-12.648-58.507l11.08 55.22a1.607 1.607 0 001.887 1.255 1.605 1.605 0 001.256-1.887l-10.952-54.588h-3.271z"></path>
          <path
            fill="#F2E5A2"
            d="M126.531 8.938H156.82600000000002V48.532000000000004H126.531z"
          ></path>
          <path d="M156.826 49.531h-30.295a1 1 0 01-1-1V8.938a1 1 0 011-1h30.295a1 1 0 011 1v39.594a.999.999 0 01-1 .999zm-29.295-2h28.295V9.938h-28.295v37.593z"></path>
          <path
            fill="#F2E5A2"
            d="M156.826 86.471V38.725h3.387v-9.99h-37.068v9.99h3.387v47.746c-19.756 6.389-34.047 24.926-34.047 46.807 0 27.17 22.025 49.195 49.195 49.195 27.168 0 49.195-22.025 49.195-49.195 0-21.881-14.293-40.419-34.049-46.807z"
          ></path>
          <path d="M141.679 183.473c-27.678 0-50.195-22.518-50.195-50.195 0-21.603 13.652-40.61 34.047-47.528V39.725h-2.387a1 1 0 01-1-1v-9.99a1 1 0 011-1h37.068a1 1 0 011 1v9.99a1 1 0 01-1 1h-2.387v46.024c20.396 6.919 34.049 25.927 34.049 47.528.001 27.678-22.517 50.196-50.195 50.196zM124.144 37.725h2.387a1 1 0 011 1v47.746a.998.998 0 01-.692.951c-19.95 6.452-33.354 24.88-33.354 45.855 0 26.575 21.62 48.195 48.195 48.195s48.195-21.62 48.195-48.195c0-20.976-13.405-39.403-33.356-45.855a.999.999 0 01-.692-.951V38.725a1 1 0 011-1h2.387v-7.99h-35.068v7.99h-.002z"></path>
          <circle cx="141.355" cy="68.08" r="9.891" fill="#F2E5A2"></circle>
          <path d="M141.355 78.971c-6.005 0-10.891-4.886-10.891-10.891s4.886-10.891 10.891-10.891 10.891 4.886 10.891 10.891-4.886 10.891-10.891 10.891zm0-19.782c-4.902 0-8.891 3.988-8.891 8.891s3.988 8.891 8.891 8.891 8.891-3.988 8.891-8.891-3.989-8.891-8.891-8.891z"></path>
          <g>
            <path
              fill="#F2E5A2"
              d="M70.88 55.186H28.73v10.002h5.441V166.84c0 8.633 7 15.633 15.635 15.633s15.633-7 15.633-15.633V65.188h5.441V55.186z"
            ></path>
            <path d="M49.806 183.473c-9.173 0-16.635-7.462-16.635-16.633V66.188H28.73a1 1 0 01-1-1V55.186a1 1 0 011-1h42.15a1 1 0 011 1v10.002a1 1 0 01-1 1h-4.441V166.84c0 9.171-7.462 16.633-16.633 16.633zM29.73 64.188h4.441a1 1 0 011 1V166.84c0 8.068 6.565 14.633 14.635 14.633 8.068 0 14.633-6.564 14.633-14.633V65.188a1 1 0 011-1h4.441v-8.002H29.73v8.002z"></path>
          </g>
          <path d="M101.955 113.293a44.46 44.46 0 00-4.721 19.984c0 24.508 19.938 44.445 44.445 44.445 24.506 0 44.445-19.938 44.445-44.445 0-7.127-1.684-13.93-4.723-19.984h-79.446zM38.921 85.455v81.385c0 6 4.883 10.883 10.885 10.883s10.883-4.883 10.883-10.883V85.455H38.921z"></path>
          <g>
            <path
              fill="#F2E5A2"
              d="M140.38 64.246h-27.248v-43.9a3.653 3.653 0 00-3.654-3.654H49.804a3.653 3.653 0 00-3.652 3.654v23.219h7.307V24h52.365v43.9a3.655 3.655 0 003.654 3.654h30.902a3.653 3.653 0 100-7.308z"
            ></path>
            <path d="M140.38 72.555h-30.902a4.66 4.66 0 01-4.654-4.654V25H54.459v18.564a1 1 0 01-1 1h-7.307a1 1 0 01-1-1V20.346a4.658 4.658 0 014.652-4.654h59.674a4.66 4.66 0 014.654 4.654v42.9h26.248c2.566 0 4.654 2.088 4.654 4.654s-2.087 4.655-4.654 4.655zM53.459 23h52.365a1 1 0 011 1v43.9a2.656 2.656 0 002.654 2.654h30.902c1.464 0 2.654-1.19 2.654-2.654s-1.19-2.654-2.654-2.654h-27.248a1 1 0 01-1-1v-43.9a2.656 2.656 0 00-2.654-2.654H49.804a2.655 2.655 0 00-2.652 2.654v22.219h5.307V24a1 1 0 011-1z"></path>
          </g>
          <g>
            <path
              fill="#F2E5A2"
              d="M123.144 28.734H160.212V38.724000000000004H123.144z"
            ></path>
            <path d="M160.213 39.725h-37.068a1 1 0 01-1-1v-9.99a1 1 0 011-1h37.068a1 1 0 011 1v9.99a1 1 0 01-1 1zm-36.069-2h35.068v-7.99h-35.068v7.99z"></path>
          </g>
          <g>
            <path
              fill="#F2E5A2"
              d="M90.005 13.404h-7.484V3.557a2.557 2.557 0 00-5.114 0v9.848h-7.486a6.94 6.94 0 00-6.941 6.941 6.94 6.94 0 006.941 6.943h20.084a6.943 6.943 0 000-13.885z"
            ></path>
            <path d="M90.005 28.289H69.921c-4.379 0-7.941-3.563-7.941-7.943 0-4.379 3.563-7.941 7.941-7.941h6.486V3.557A3.562 3.562 0 0179.963 0a3.563 3.563 0 013.559 3.557v8.848h6.484c4.38 0 7.943 3.563 7.943 7.941 0 4.38-3.564 7.943-7.944 7.943zM69.921 14.404a5.948 5.948 0 00-5.941 5.941 5.949 5.949 0 005.941 5.943h20.084a5.95 5.95 0 005.943-5.943 5.949 5.949 0 00-5.943-5.941h-7.484a1 1 0 01-1-1V3.557a1.558 1.558 0 00-3.113 0v9.848a1 1 0 01-1 1l-7.487-.001z"></path>
            <path
              fill="#F2E5A2"
              d="M89.63 5.813a1.74 1.74 0 01-1.742 1.74h-15.85a1.742 1.742 0 01-1.742-1.74c0-.961.781-1.742 1.742-1.742h15.85a1.741 1.741 0 011.742 1.742z"
            ></path>
            <path d="M87.888 8.553h-15.85a2.744 2.744 0 01-2.742-2.74 2.745 2.745 0 012.742-2.742h15.85a2.745 2.745 0 012.742 2.742c0 1.51-1.23 2.74-2.742 2.74zM72.039 5.07a.742.742 0 100 1.482h15.85a.742.742 0 100-1.482h-15.85z"></path>
            <g>
              <circle cx="79.963" cy="19.969" r="4.161" fill="#F2E5A2"></circle>
              <path d="M79.963 25.131c-2.846 0-5.16-2.315-5.16-5.162s2.314-5.162 5.16-5.162c2.847 0 5.162 2.315 5.162 5.162s-2.316 5.162-5.162 5.162zm0-8.324c-1.742 0-3.16 1.419-3.16 3.162s1.418 3.162 3.16 3.162c1.743 0 3.162-1.419 3.162-3.162s-1.419-3.162-3.162-3.162z"></path>
            </g>
          </g>
          <g>
            <path
              fill="#F2E5A2"
              d="M192.757 158.918a3.255 3.255 0 01-3.254 3.254h-95.65a3.256 3.256 0 010-6.51h95.65a3.256 3.256 0 013.254 3.256z"
            ></path>
            <path d="M189.504 163.172h-95.65a4.258 4.258 0 01-4.254-4.254 4.26 4.26 0 014.254-4.256h95.65a4.26 4.26 0 014.254 4.256 4.26 4.26 0 01-4.254 4.254zm-95.651-6.51a2.257 2.257 0 00-2.254 2.256 2.256 2.256 0 002.254 2.254h95.65a2.256 2.256 0 002.254-2.254 2.257 2.257 0 00-2.254-2.256h-95.65z"></path>
          </g>
          <g>
            <path
              fill="#F2E5A2"
              d="M70.88 158.918a3.254 3.254 0 01-3.254 3.254H31.984a3.255 3.255 0 010-6.51h35.643a3.254 3.254 0 013.253 3.256z"
            ></path>
            <path d="M67.627 163.172H31.984a4.258 4.258 0 01-4.254-4.254 4.26 4.26 0 014.254-4.256h35.643a4.26 4.26 0 014.254 4.256 4.26 4.26 0 01-4.254 4.254zm-35.643-6.51a2.257 2.257 0 00-2.254 2.256 2.256 2.256 0 002.254 2.254h35.643a2.256 2.256 0 002.254-2.254 2.257 2.257 0 00-2.254-2.256H31.984z"></path>
          </g>
        </svg>
      );
  }


  function Biology({size}:{size:number}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width={size?size:800}
        height={size?size:800}
      >
        <path
          fill="#C9E3F7"
          d="M341.333 193.504V34.133H170.667v159.37c-51.011 29.51-85.333 84.659-85.333 147.83C85.333 435.593 161.743 512 256 512s170.667-76.407 170.667-170.667c0-63.17-34.323-118.319-85.334-147.829z"
        ></path>
        <path fill="#AED5F3" d="M136.533 0H375.466V68.267H136.533z"></path>
        <path fill="#93C7EF" d="M256 0H375.467V68.267H256z"></path>
        <path
          fill="#D80027"
          d="M423.25 307.2h-47.783c-59.733 0-59.733-40.96-119.467-40.96s-59.733 40.96-119.467 40.96H88.75a171.432 171.432 0 00-3.417 34.133C85.333 435.593 161.743 512 256 512s170.667-76.407 170.667-170.667c0-11.69-1.178-23.103-3.417-34.133z"
        ></path>
        <g fill="#A2001D">
          <path d="M423.25 307.2h-47.783c-59.733 0-59.733-40.96-119.467-40.96V512c94.258 0 170.667-76.407 170.667-170.667 0-11.69-1.178-23.103-3.417-34.133z"></path>
          <circle cx="187.733" cy="358.4" r="34.133"></circle>
        </g>
        <g fill="#D80027">
          <circle cx="332.8" cy="401.067" r="42.667"></circle>
          <circle cx="238.933" cy="187.733" r="34.133"></circle>
        </g>
        <circle cx="290.133" cy="119.467" r="17.067" fill="#A2001D"></circle>
      </svg>
    );
  }
  


export {SchoolIcon , Book , Chart , Chemic , Biology};