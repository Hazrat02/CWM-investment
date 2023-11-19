<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4 d-flex justify-content-between px-3">
        <div class="">
          <span class="h5 mb-0">All Offers</span>
        </div>
        <div class="">
          <button
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#AddModal"
          >
            + Add Offers
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
                          <th>Name</th>
                          <th>Image</th>
                      
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
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
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
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
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
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
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
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
                Update Offer
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
                  <label class="" for="exampleInputEmail1">Offer Name</label>
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Enter Offer Name"
                  />
                </div>
                
                <div class="">
                  <label class="" for="img">Offer Image</label
                  >
                  <input class="form-control" id="img" type="file" />
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
                + Add Offer
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
                  <label class="" for="exampleInputEmail1">Offer Name</label>
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Enter Offer Name"
                  />
                </div>
                
                <div class="">
                  <label class="" for="img">Offer Image</label
                  >
                  <input class="form-control" id="img" type="file" />
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
