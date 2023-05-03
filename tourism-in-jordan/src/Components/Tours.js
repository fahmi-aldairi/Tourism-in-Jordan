import React from "react";

const arr = [
  {
    id: 1,
    name: "Petra",
    info: "Info About Petra",
    image:
      "https://images.pling.com/img/00/00/54/70/32/1331633/debc46a923efb3f23a0043af76b6e87188c8.jpg",
  },
  {
    id: 2,
    name: "Petra",
    info: "Info About Petra",
    image:
      "https://images.pling.com/img/00/00/54/70/32/1331633/debc46a923efb3f23a0043af76b6e87188c8.jpg",
  },
  {
    id: 3,
    name: "Petra",
    info: "Info About Petra",
    image:
      "https://images.pling.com/img/00/00/54/70/32/1331633/debc46a923efb3f23a0043af76b6e87188c8.jpg",
  },
  {
    id: 4,
    name: "Petra",
    info: "Info About Petra",
    image:
      "https://images.pling.com/img/00/00/54/70/32/1331633/debc46a923efb3f23a0043af76b6e87188c8.jpg",
  },
];

const Tours = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {arr.map((ele) => {
        return (
          <div className="container">
            <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
              <div className="card">
                <div className="card-body d-flex flex-row justify-content-center">
                  <div>
                    <h5 className="card-title font-weight-bold mb-2">
                      {ele.name}
                    </h5>
                  </div>
                </div>
                <div
                  className="bg-image hover-overlay ripple rounded-0"
                  data-mdb-ripple-color="light"
                >
                  <img className="img-fluid" src={ele.image} alt={ele.id} />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                  {/* <div className="text-center mt-3">
                    <p>{ele.info}</p>
                  </div> */}
                </div>
                <div className="card-body">
                  {/* <p className="card-text collapse" id="collapseContent">
                    Recently, we added several exotic new dishes to our
                    restaurant menu. They come from countries such as Mexico,
                    Argentina, and Spain. Come to us, have some wine and enjoy
                    our juicy meals from around the world.
                  </p> */}
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-link link-danger p-md-1 my-1"
                      // data-mdb-toggle="collapse"
                      href="#collapseContent"
                      role="button"
                      // aria-expanded="false"
                      // aria-controls="collapseContent"
                    >
                      Read more
                    </a>
                    <div>
                      <i
                        className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                        data-mdb-toggle="tooltip"
                        data-mdb-placement="top"
                        title="Share this post"
                      />
                      <i
                        className="fas fa-heart text-muted p-md-1 my-1 me-0"
                        data-mdb-toggle="tooltip"
                        data-mdb-placement="top"
                        title="I like it"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
