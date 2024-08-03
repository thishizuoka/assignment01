"use strict";

//////////////// INPUT MAIL CHECK////////////
// let reg = /^\w+@[a-zA-Z]{4,}\.com$/i;
// let phoneNumberParttern = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btn = document.querySelector(".btn");
const formGroup = document.querySelector(".form-group");
const infor = document.querySelector(".infor");
const alert = document.querySelector(".alert");

btn.addEventListener("click", function () {
  let inputEmail = document.querySelector(".form-control").value;
  // console.log(reg.test(inputEmail));
  // console.log(inputEmail);
  // console.log(regex.test(inputEmail));
  if (regex.test(inputEmail)) {
    formGroup.classList.add("hidden");
    infor.classList.remove("hidden");
  } else {
    alert.classList.remove("hidden");
  }
});

// const parentContainer = document.querySelector(".read-more-container");

// parentContainer.addEventListener("click", (event) => {
//   const current = event.target;

//   const isReadMoreBtn = current.className.includes("read-more-btn");

//   if (!isReadMoreBtn) return;

//   const currentText = event.target.parentNode.querySelector(".read-more-text");
//   currentText.classList.toggle("read-more-text--show");
//   current.textContent = current.textContent.includes("Read More")
//     ? "Read Less..."
//     : "Read More...";
// });

////////////////////VIEWMORE STYLE ////

// Chọn tất cả các phần tử có lớp 'read-more-container'
const containers = document.querySelectorAll(".read-more-container");

// Lặp qua tất cả các phần tử
containers.forEach((container) => {
  // Thêm sự kiện 'click' cho từng phần tử
  container.addEventListener("click", (event) => {
    const current = event.target; //(Lấy thông tin phần tử nhận sự kiện)

    // Kiểm tra xem phần tử nhấp chuột có phải là nút 'read-more-btn' không
    if (!current.classList.contains("read-more-btn")) return;

    // Tìm phần tử chứa văn bản để hiển thị/ẩn
    const currentText = current.parentNode.querySelector(".read-more-text");

    // Chuyển đổi lớp để hiển thị/ẩn nội dung
    currentText.classList.toggle("read-more-text--show");

    // Thay đổi văn bản của nút
    current.textContent = current.textContent.includes("View More")
      ? "View Less..."
      : "View More...";
  });
});
