// Chờ cho toàn bộ DOM (cấu trúc HTML) được tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần thiết bằng ID
  const envelope = document.getElementById("envelope");
  const messageContent = document.getElementById("messageContent");

  // Thêm bộ lắng nghe sự kiện "click" vào phần tử phong bì
  envelope.addEventListener("click", function () {
    // Khi click vào phong bì:

    // Ẩn phong bì đi
    envelope.style.display = "none";

    // Loại bỏ class 'hidden' khỏi nội dung thư để hiển thị nó
    // và bắt đầu hiệu ứng chuyển động (đã định nghĩa trong CSS)
    messageContent.classList.remove("hidden");

    // Thêm một chút delay để hiệu ứng opacity/transform trong CSS hoạt động
    // Đặt opacity và transform sau khi loại bỏ display: none
    setTimeout(function () {
      messageContent.style.opacity = "1";
      messageContent.style.transform = "translateY(0)";
      messageContent.style.visibility = "visible"; // Đảm bảo hiển thị
    }, 10); // Một độ trễ nhỏ (ví dụ 10ms) là đủ
  });
});
