<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Accounts Overview</h2>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0 mt-4">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <div class="row gy-3 align-items-center">
                <div class="col-lg-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="avatar ms-3"
                      src="./../../assets/deshboard/img/avatar-1.jpg"
                      alt="Tomas Hecktor"
                    />
                    <div class="ms-3">
                      <h3 class="h5 mb-0">Tomas Hecktor</h3>
                      <p class="text-sm fw-light mb-0">@tomhecktor</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 text-center">
                  <div
                    class="d-inline-block py-1 px-4 rounded-pill bg-dash-dark-3 fw-light text-sm"
                  >
                    Wallet No:32535643
                  </div>
                </div>
                <div class="col-lg-5">
                  <ul
                    class="list-inline text-center mb-0 row justify-content-between mb-0 text-sm align-items-center"
                  >
                    <div class="col-lg-7">
                      <li class="list-inline-item">
                        <i class="fab fa-blogger-b me-2"></i>Currency:USD
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-code-branch me-2"></i>Balance:34355
                      </li>
                    </div>
                    <div class="col-lg-5">
                      <li class="list-inline-item">
                        <RouterLink class="btn btn-success" to="/deposit">Deposit</RouterLink
                        ><br /><br /><RouterLink class="btn btn-primary" to="/withdraw">
                          Withd...
                        </RouterLink>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import { RouterLink } from 'vue-router';

</script>
  <style >
.card-img-absolute {
  position: absolute;
  top: 0;
  right: 0%;
  height: 100%;
}
</style>
    