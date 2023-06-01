export function CreateCustomerAccount() {
    return (
        <>
            <div className=" container mx-auto my-5 col-9">
                <div className="border-form">
                    <h5 style={{textAlign: "center"}}>Đăng ký tài khoản</h5>
                    <br/>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Tài khoản <span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="text" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Mật khẩu <span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="password" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Xác nhận mật khẩu <span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="password" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Họ tên <span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="text" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Ngày sinh<span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="date" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Giới tính <span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-2">
                            <input type="radio" id="nam" name="fav_language" defaultValue="HTML"/>
                            &nbsp; <label htmlFor="nam">Nam</label>
                        </div>
                        <div className="col-2">
                            <input type="radio" id="nữ" name="fav_language" defaultValue="HTML"/>
                            &nbsp; <label htmlFor="nữ">Nữ</label>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                CMND <span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="text" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Email<span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="text" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label
                                className="fw-bold"
                                htmlFor="address"
                                style={{marginRight: "2%"}}
                            >
                                Địa chỉ<span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
        <textarea
            name="address"
            id="address"
            rows={2}
            cols={45}
            style={{maxWidth: "100%"}}
            defaultValue={""}
        />
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Số điện thoại<span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="text" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                Hình ảnh<span className="color-span">(*)</span>:
                            </label>
                        </div>
                        <div className="col-4">
                            <input type="text" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2%"}}>
                        <div className="col-4" style={{textAlign: "right"}}>
                            <input type="hidden"/>
                        </div>
                        <div className="col-4">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{background: "#f26b38"}}
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}