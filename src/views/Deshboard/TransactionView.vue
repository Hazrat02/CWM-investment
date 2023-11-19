<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Transaction History</h2>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="row justify-content-between">
                  <div class=" p-2 ms-3 col-3" >
                    <label>Result: </label> <span> 5</span>
                  </div>
                  <div class="col-6 p-3">
                    <input style="border: solid white 1px;"
                      class="form-control"
                      type="text"
                      v-model="search"
                      placeholder="search.."
                    />
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Deposit</th>
                          <th>Withdraw</th>
                          <th>Account Balance</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:red;padding: 3px;border-radius: 10%; color: beige;">Pending</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                       
                        
                      </tbody>
                    </table>
                  </div>
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
</script>

<style scoped>
 @import "./../../assets/main.css";
</style>