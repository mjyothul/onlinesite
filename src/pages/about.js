
import Layout from '@theme/Layout';

export default function About(){
    return(
        <Layout title='About' description='About us'>
            <div
                style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingLeft:'60px',
                        paddingRight:'20px',
                    }}>
                    <p>
                    <br />
                    <br />
                    AI Bolster is an innovative research-oriented company solving problems with artificial intelligence 
                    and machine learning. We try to implement the problem-solving approach with the use of technology and 
                    industry best practices manifestation. The problems will be based on the agility approach and will be 
                    driven in a demo approach to the client to deliver and will be on a continuous improvement model based 
                    on the level of satisfaction to the client. We give utmost importance and professional personality biased 
                    with the integrated to deliver what has been promised and suggest with the industry and SME advise.
                    <br />
                    <br />
                    <h1>Vision</h1>
                    Build better business adopting digital transformation implementing latest technology trends.
                    <br />
                    <br />
                    <h1>Mission</h1>
                    Implement cost effective and sustainable infrastructure for businesses adopting latest technology
                    trends with industry best practices.
                    <br />
                    <br />
                    <h1>Values</h1>
                    Integrity, Transparency and Sustainability are the core values of AIBolster.
                    <br />
                    <br />
                    </p>
            </div>
        </Layout>
    );
}
