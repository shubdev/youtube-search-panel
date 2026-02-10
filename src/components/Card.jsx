import "../stylepages/Card.css";
import itemData from "../assets/Data.json"
import ShowError from "./showError";
export default function Card({ data }) {

    return (
        <>
            <div id="container">
                {
                    data ? (
                        data.map((item) => {
                            // console.log(item);

                            return (
                                <div className="card" key={item.id}>
                                    <div className="thumb-wrapper">
                                        <img
                                            className="thumbnail"
                                            src={item.thumbnail}
                                            alt={item.thumbnail}
                                        />
                                        <span className="duration">{item.duration}</span>
                                    </div>

                                    <div className="info">
                                        <img
                                            className="channel-icon"
                                            src={item.thumbnail}
                                            alt={item.channelName}
                                        />

                                        <div className="meta">
                                            <h3 className="title">
                                                {item.title}
                                            </h3>
                                            <p className="channel-name">{item.channelName}</p>
                                            <p className="stats">{item.views} • <span> {item.uploadedAt}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <ShowError />
                    )
                }
            </div>
        </>
    );
}
