// 🌍 Global → har jagah use hota hai ya ( csk fan ha gadar)

let globol_var = "Globol_variavble"; //👉 Ye function ke bahar bana hai Is liye ye har jagah accessible hota hai (function ke andar bhi, bahar bhi)
alert(globol_var + " Function outside ")  // Answer Is Globol Variable

function globol() {
    alert(globol_var + " inside");  // Answer Is Globol Variable
}
//  🏠 Local → sirf apne function ke andar ya (rcb fan ha full loyalty)

function local_var() {
    let local = "Local variable";
    alert(local); // ✅ works
}
alert(local); // ❌ Error: local is not defined
