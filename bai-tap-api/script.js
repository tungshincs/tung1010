"use strict";

function onHomepage() {
  if (localStorage.getItem("HEROKUAPP_TOKEN") === null) {
    alert("Bạn chưa đăng nhập. Vui lòng đăng nhập trước!");
    document.location.href = "./signin.html";
  } else {
    fetch("https://todo-api-with-auth.herokuapp.com/api/auth/user", {
      method: "GET",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("HEROKUAPP_TOKEN")),
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            const $imgAvatar = $(".avatar");
            const $fullname = $(".fullname");
            $($imgAvatar).attr(
              "src",
              "https://todo-api-with-auth.herokuapp.com" + data.data.avatar
            );
            $($imgAvatar).attr(
              "alt",
              data.data.lastname + " " + data.data.firstname
            );

            $fullname.text(data.data.lastname + " " + data.data.firstname);
          });
        } else {
          const err = new Error("HTTP status code " + res.status);
          throw err;
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  // Upload avatar
  const $inputTag = $("#inputTag");
  $inputTag.on("change", function (e) {
    uploadAvatar(this);
  });
}
const $btnSignOut = $("#btn-signout");
$btnSignOut.on("click", function (e) {
  e.preventDefault();
  window.localStorage.removeItem("HEROKUAPP_TOKEN");
  document.location.href = "./signin.html";
});

const $btnSignup = $("#btn-signup");
$btnSignup.on("click", function (e) {
  e.preventDefault();
  document.location.href = "./signup.html";
});
const $homePage = $("#btn-homepage");
$homePage.on("click", function (e) {
  e.preventDefault();
  document.location.href = "./index.html";
});
function signin() {
  // When click sign in
  const $btnSignin = $("#btn-signin");

  $btnSignin.on("click", function (e) {
    e.preventDefault();

    const $username = $("#username").val().trim();
    const $password = $("#password").val().trim();

    if (String($username) != "" && String($password) != "") {
      $($btnSignin).prop("disabled", true);

      fetch("https://todo-api-with-auth.herokuapp.com/api/auth/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: $username,
          password: $password,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem(
              "HEROKUAPP_TOKEN",
              JSON.stringify(res.headers.get("Authorization"))
            );

            alert("Đăng nhập thành công. Đang chuyển đến Trang chủ.");

            document.location.href = "./index.html";
          } else {
            res.json().then((data) => {
              alert(data.error);
            });
          }
        })
        .finally(() => {
          $($btnSignin).prop("disabled", false);
        });
    } else {
      alert("Bạn phải nhập cả username và password!");
    }
  });
}

function signup() {
  // When click sign up
  const $btnSignup = $(".btn-signup");

  $btnSignup.on("click", function (e) {
    e.preventDefault();

    const $firstname = $("#firstname").val().trim();
    const $lastname = $("#lastname").val().trim();
    const $username = $("#username").val().trim();
    const $password = $("#password").val().trim();

    if (
      String($firstname) === "" ||
      String($lastname) === "" ||
      String($username) === "" ||
      String($password) === ""
    ) {
      alert("Bạn phải nhập tất cả các trường!");
    } else {
      $($btnSignup).prop("disabled", true);

      fetch("https://todo-api-with-auth.herokuapp.com/api/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: String($username),
          password: String($password),
          firstname: String($firstname),
          lastname: String($lastname),
        }),
      })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem(
              "HEROKUAPP_TOKEN",
              JSON.stringify(res.headers.get("Authorization"))
            );
            alert("Đăng ký thành công. Đang chuyển đến Trang chủ.");
            document.location.href = "./index.html";
          } else {
            res.json().then((data) => {
              alert(data.error);
            });
          }
        })
        .finally(() => {
          $($btnSignup).prop("disabled", false);
        });
    }
  });
}

function uploadAvatar(inputElement) {
  const file = inputElement.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    /******************* for Binary ***********************/
    const data = reader.result.split(",")[1];
    const binaryBlob = atob(data);

    const formData = new FormData();
    formData.append("avatar", binaryBlob);

    fetch("https://todo-api-with-auth.herokuapp.com/api/user/avatar", {
      method: "PUT",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("HEROKUAPP_TOKEN")),
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thay đổi avatar thành công.");
          window.location.reload();
        } else {
          // res.json().then((data) => {
          //   alert(data.error);
          // });
          const err = new Error("HTTP status code " + res.status);
          throw err;
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  reader.readAsDataURL(file);
}

// Run code after load page
$(function () {
  const path = document.location.pathname;
  const page = path.split("/").pop();

  if (page === "" || page === "index.html") {
    onHomepage();
  } else if (page === "signin.html") {
    signin();
  } else if (page === "signup.html") {
    signup();
  }
});
