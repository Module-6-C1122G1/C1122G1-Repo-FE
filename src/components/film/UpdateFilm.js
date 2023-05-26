import './UpdateFilm.css'
export function UpdateFilm() {
    return(
        <>
            <div className="row mx-0">
                <div className="container mx-auto my-5 col-8">
                    <div className="form-edit-movie">
                        <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
                            Chỉnh sửa phim
                        </h1>
                        <form action="">
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Ảnh phim <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <input type="file" style={{ width: "100%" }} />
                                </div>
                                <div className="col-3">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/vi/7/72/Star_wars_the_clone_wars.jpg"
                                        alt=""
                                        style={{ height: "100%", width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Tên phim{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name="movieName"
                                        defaultValue="The Clone Wars"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Từ ngày{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="date"
                                        style={{ width: "100%" }}
                                        name="dateForm"
                                        defaultValue="2017-02-28"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Đến ngày <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="date"
                                        style={{ width: "100%" }}
                                        name="dateTo"
                                        defaultValue="2017-03-04"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Diễn viên <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name="actor"
                                        defaultValue="Long"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Hãng phim <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name=""
                                        defaultValue="Disney"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Đạo diễn <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name=""
                                        defaultValue="Danh"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Thời lượng <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="number"
                                        style={{ width: "100%" }}
                                        name=""
                                        defaultValue={231}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Phiên bản <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="radio" name="version" />
                                        <span style={{ marginRight: "5%" }}>2D</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="radio" name="version" />
                                        <span style={{ marginRight: "5%" }}>3D</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Trailer <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name="trailer"
                                        defaultValue="Trailer phim"
                                    />
                                </div>
                            </div>
                            <div className="row kind-movie" style={{ marginBottom: "2%" }}>
                                <div className="title-kind col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Thể loại <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Hành động</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Viễn tưởng</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Hoạt hình</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Võ thuật</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <input type="hidden" />
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Hài hước</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Chiến tranh</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Kinh dị</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Kinh điển</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <input type="hidden" />
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Lãng mạn</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Kiếm hiệp</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Phiêu lưu</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Tâm lý</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <input type="hidden" />
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Tình cảm</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox" />
                                        <span style={{ marginRight: "5%" }}>Âm nhạc</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Phòng chiếu <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <select style={{ width: "100%" }}>
                                        <option value="">PC001</option>
                                        <option value="">PC002</option>
                                        <option value="">PC003</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Lịch chiếu <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-1">
                                    <input
                                        type="text"
                                        style={{ width: "100%", height: 30 }}
                                        placeholder="hh:mm"
                                    />
                                </div>
                                <div className="col-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ height: 30, padding: "2%" }}
                                    >
                                        Thêm giờ chiếu
                                    </button>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <input type="hidden" />
                                </div>
                                <div className="col-8">
                                    <input type="text" style={{ width: "100%" }} placeholder="09:00" />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Nội dung <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
            <textarea
                name="content"
                rows={4}
                cols={86}
                placeholder="Nội dung phim"
                style={{ maxWidth: "100%" }}
                defaultValue={""}
            />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <input type="hidden" />
                                </div>
                                <div className="col-8">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ background: "#f26b38" }}
                                    >
                                        Chỉnh sửa
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-primary"
                                        style={{ background: "black", color: "white" }}
                                    >
                                        Quay lại
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}