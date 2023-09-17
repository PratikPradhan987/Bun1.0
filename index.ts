import { createServer } from "./src/utils/createServer";
const PORT = 3000;

(function main() {
    const app = createServer();

    app.listen(PORT, () => {
        console.log(`Listning on ${PORT}`);
        
    })
})();