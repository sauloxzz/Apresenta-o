import Footer from "../../components/Footer/Footer"
import "./Dashboard.css"
export default function Dashboard() {
    return (
        <>
            <iframe className='Domus-Eletro-grafico' title="grafico da domus" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZDlhMmZlZjMtMTY4Yy00MDk4LTlkYmUtOWJhMDUxMDA2ODg3IiwidCI6ImIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCJ9" ></iframe>
            <div className="FooterDashboard">
                <Footer />
            </div>
        </>
    )
}
