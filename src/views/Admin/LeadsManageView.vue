<template>
    <div>
        <AdminDeshboardLayout>
        <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">All Leads</h2>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="card-body pt-0">
                  <div class="table-responsive mb-4" >
                    <table class="table mb-0" style="overflow-x: auto !important;">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Message</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg </td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg </td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg </td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg </td>
                          
                        </tr>
                       
                        
                      </tbody>
                      
                    </table>


                  </div>
                  
                    <!-- v-show="totalPages > 1" -->
                    <nav  aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item" :class="{
                                            disabled: currentPage === 1,
                                        }">
                                            <button class="page-link" @click="previousPage" :disabled="currentPage === 1">
                                                Previous
                                            </button>
                                        </li>
                                        <li class="page-item">
                                            <span class="btn ">Page {{ currentPage }} of {{ totalPages }}</span>
                                        </li>

                                        <li class="page-item">
                                            <button class="page-link" @click="nextPage" :class="{
                                                disabled: currentPage === totalPages,
                                            }">
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
      </AdminDeshboardLayout>
    </div>
  </template>
    
  <script>

  </script>

<style scoped>
 @import "./../../assets/main.css";
</style>
