<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4 d-flex justify-content-between px-3">
        <div class="">
          <span class="h5 mb-0">All Portfolios</span>
        </div>
        <div class="">
          <button
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#AddModal"
          >
            + Add Portfoio
          </button>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="card-body pt-0">
                  <div class="table-responsive mb-4">
                    <table
                      class="table mb-0"
                      style="overflow-x: auto !important"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Type</th>
                          <th>Image</th>
                          <th>Owned By</th>
                          <th>Avatar Image</th>
                          <th>Current Bid</th>
                          <th>Liked By</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                          <td>Image</td>
                          <td>2</td>
                          <td>1</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#EditModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                          <td>Image</td>
                          <td>2</td>
                          <td>1</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                          <td>Image</td>
                          <td>2</td>
                          <td>1</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                          <td>Image</td>
                          <td>2</td>
                          <td>1</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#EditModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- v-show="totalPages > 1" -->
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li
                        class="page-item"
                        :class="{
                          disabled: currentPage === 1,
                        }"
                      >
                        <button
                          class="page-link"
                          @click="previousPage"
                          :disabled="currentPage === 1"
                        >
                          Previous
                        </button>
                      </li>
                      <li class="page-item">
                        <span class="btn"
                          >Page {{ currentPage }} of {{ totalPages }}</span
                        >
                      </li>

                      <li class="page-item">
                        <button
                          class="page-link"
                          @click="nextPage"
                          :class="{
                            disabled: currentPage === totalPages,
                          }"
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade text-start"
        id="EditModal"
        tabindex="-1"
        aria-labelledby="depositModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="depositModallabel">
                Update portfolio
              </h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 align-items-center">
                <div class="">
                  <label class="" for="exampleInputEmail1">Title</label>
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Enter title"
                  />
                </div>
                <div class="">
                  <label class="" for="inlineFormSelectPref">Type</label>
                  <select class="form-select" id="inlineFormSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="">
                  <label class="" for="img">Image</label
                  ><span>(Size 564px * 705px)</span>
                  <input class="form-control" id="img" type="file" />
                </div>
               
                <div class="">
                  <label class="" for="img2">Avatar Image </label
                  ><span> (Size 304px * 304px)</span>
                  <input class="form-control" id="img2" type="file" />
                </div>
                <div class="">
                  <label class="" for="Owned">Owned By </label
                  >
                  <input class="form-control" id="Owned" type="text" placeholder="Owner By" />
                </div>
                <div class="">
                  <label class="" for="bit">Current Bit </label
                  >
                  <input class="form-control" id="bit" type="number" placeholder="Enter Your Bit" />
                </div>
                <div class="">
                  <label class="" for="bit">Like By </label
                  >
                  <input class="form-control" id="like" type="number" placeholder="Like By" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button class="btn btn-primary" type="button">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade text-start"
        id="AddModal"
        tabindex="-1"
        aria-labelledby="depositModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="depositModallabel">
                + Add portfolio
              </h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 align-items-center">
                <div class="">
                  <label class="" for="exampleInputEmail1">Title</label>
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Enter title"
                  />
                </div>
                <div class="">
                  <label class="" for="inlineFormSelectPref">Type</label>
                  <select class="form-select" id="inlineFormSelectPref">
                    <option selected>Choose...</option>
                    <option value="Forex">Forex</option>
                    <option value="Crypto">Crypto</option>
                    <option value="NFTs">NFTs</option>
                    <option value="REITs">REITs</option>
                    <option value="RMS Servics">RMS Servics</option>
                  </select>
                </div>
                <div class="">
                  <label class="" for="img">Image</label
                  ><span>(Size 564px * 705px)</span>
                  <input class="form-control" id="img" type="file" />
                </div>
               
                <div class="">
                  <label class="" for="img2">Avatar Image </label
                  ><span> (Size 304px * 304px)</span>
                  <input class="form-control" id="img2" type="file" />
                </div>
                <div class="">
                  <label class="" for="Owned">Owned By </label
                  >
                  <input class="form-control" id="Owned" type="text" placeholder="Owner By" />
                </div>
                <div class="">
                  <label class="" for="bit">Current Bit </label
                  >
                  <input class="form-control" id="bit" type="number" placeholder="Enter Your Bit" />
                </div>
                <div class="">
                  <label class="" for="bit">Like By </label
                  >
                  <input class="form-control" id="like" type="number" placeholder="Like By" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button class="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </AdminDeshboardLayout>
  </div>
</template>
    
  <script>

</script>

<style scoped>
 @import "./../../assets/main.css";
</style>
