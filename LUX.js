function openWhatsApp() {
    var phoneNumber = "+3547608535";
    var message = "Hello, I'm interested in your product.";

    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber) + "&text=" + encodeURIComponent(message);

    window.open(url);
}