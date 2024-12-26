$(function () {

  document.querySelectorAll(".copy-text-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Get the ID of the target text from the button's data attribute
      const targetId = button.getAttribute("data-target");
      const textElement = document.getElementById(targetId);

      // Check if the element exists
      if (textElement) {
        const textToCopy = textElement.textContent || "";

        // Use Clipboard API to copy text
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            alert(`Text copied: "${textToCopy}"`);
          })
          .catch((err) => {
            console.error("Failed to copy text:", err);
            alert("Failed to copy text. Please try again.");
          });
      } else {
        alert("Target text not found!");
      }
    });
  });
});



// Script for copy page image

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Web Accessibility</title>
//     <link
//       rel="shortcut icon"
//       href="assets/images/favicon.png"
//       type="image/x-icon"
//     />
//     <link rel="stylesheet" href="styles/global.css" />
//   </head>
//   <body>
//     <header class="internal-main-nav">
//       <a href="#main-content" class="skip-content">Skip to main content</a>
//       <div class="nav-container internal-page-header">
//         <a href="../../home.html" class="logo">
//           <img
//             class="logo__image"
//             src="../../assets/images/accessibility-logo.svg"
//             alt="logo"
//           />
//         </a>
//         <nav>
//           <ul>
//             <li>
//               <a href="../../about-us.html"> About Us</a>
//             </li>
//             <li>
//               <a href="../../all-tools.html">All Tools</a>
//             </li>
//             <li>
//               <a href="../../our-certfications.html">Our Certifications</a>
//             </li>
//             <li>
//               <a href="../../support.html">Our Support</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//     <main class="main-content" id="main-content">
//       <div class="text-center contianer-div position-relative" id="scroll-top">
//         <div
//           class="text-start position-absolute"
//           style="top: -10px; left: 40px"
//         >
//           <a class="back-link" href="home.html"> Back Home</a>
//         </div>
//         <h1 class="text-center white-color large-heading">
//           Guideline 1.3/Cell-Header-Association
//         </h1>
//       </div>
//       <div class="container-body">
//         <div>
//           <img
//             id="image1"
//             src="http://127.0.0.1:5500/assets/images/ul-list-item.png"
//             alt="Sample Image 1"
//             width="200"
//           />
//           <button class="copyButton" data-target="image1">Copy Image 1</button>
//         </div>
//         <div>
//           <img
//             id="image2"
//             src="http://127.0.0.1:5500/assets/images/ul-list-item.png"
//             alt="Sample Image 2"
//             width="200"
//           />
//           <button class="copyButton" data-target="image2">Copy Image 2</button>
//         </div>

//         <div class="bottom-list">
//           <a href="#scroll-top"
//             ><span class="material-symbols-outlined">arrow_circle_up</span
//             >Scroll Up</a
//           >
//         </div>
//       </div>
//     </main>

//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
//       crossorigin="anonymous"
//     ></script>
//     <script>
//       // JavaScript Code
//       document.querySelectorAll(".copyButton").forEach((button) => {
//         button.addEventListener("click", async () => {
//           // Get the ID of the target image from the button's data attribute
//           const targetId = button.getAttribute("data-target");
//           const imageElement = document.getElementById(targetId);

//           if (imageElement) {
//             try {
//               // Fetch the image as a Blob
//               const response = await fetch(imageElement.src);
//               const blob = await response.blob();

//               // Create a ClipboardItem for the image
//               const clipboardItem = new ClipboardItem({ [blob.type]: blob });

//               // Write the ClipboardItem to the clipboard
//               await navigator.clipboard.write([clipboardItem]);
//               alert("Image copied to clipboard!");
//             } catch (err) {
//               console.error("Failed to copy image:", err);
//               alert("Failed to copy image. Please try again.");
//             }
//           } else {
//             alert("Target image not found!");
//           }
//         });
//       });
//     </script>
//     <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
//   </body>
// </html>
