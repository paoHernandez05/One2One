function LandingPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const res = await fetch("http://localhost:3000/api/conversation/allConversations", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const response = await res.json();
            console.log(response);

        } catch (error) {
            console.log("Nop, error")
        }
    };

    return (
        <>
            <div>Hola esto es test c:</div>
            <form onSubmit={handleSubmit}>
                <button type="submit"></button>
            </form>
        </>
    );
}
export default LandingPage;
