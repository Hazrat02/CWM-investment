<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Profile Information</h2>
        </div>
      </div>
      <section class="pt-0 mt-4">
        <div class="container-fluid">
          <div class="row justify-content-center gy-4">
            <div class="col-lg-4">
              <!-- User block-->
              <div class="card">
                <div class="card-body">
                  <div class="text-center">
                    <div class="position-relative d-inline-block">
                      <img v-if="authUser.profile"
                        class="avatar avatar-lg mb-3"
                        :src="authUser.profile"
                        alt="Richard Nevoreski"
                      />
                      <img v-else
                        class="avatar avatar-lg mb-3"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABaFBMVEX///9GyPlHxvlRqPhSpvhLuvhTpPhLu/hRqvhZk/hMt/h5OPRIxPlGyflUofhakfhUovhNtPhOsfh2QPRJwflYlvhzR/VWnfhXmfh3PPRPrvhoZ/ZqYfZuVvVJv/lbjfddh/dfgvdhe/dmbvZjdfdxTvVdifdwUfVqYvZehPdlb/ZsW/VgfvdnavZjd/fe9P7v9/7p5/3r+f7k7f5tL/PK6v274/ys3Pub1Pva8v759//BrfrVyPtxH/OH0/tzz/qC1vvD5fx4x/m74Pxwvfmt5fyv2Px7uPmU3fuQv/qozvuBs/q81PzO3/2Aq/lvofl4mPi+y/t7jfi4wPvw7/7b6f3j3f3JuPqLY/a4o/mASfWSyvrK4v1pr/mixPt2w/mYsfqRo/mSmfh3d/d/gve3uPuYlPjT0/ywyPuTxPqZivipm/mKcPaZqPqtv/uBXvaVdvfEq/qzkfipgvigdPeWY/bQwfuVi/fP5Y/IAAAWrUlEQVR4nO2diVcayRPHUQ4FlEMiiEhQVBA8uFXwPhA1GjUCxqgx6xFjkjVZ3XX//V93V88wIODMdHPse7/ve0nUhIZPqrv6qqrRaP4vdsXj6dTs3Pby8vIKaHV5dTubTaXj8VZ/NGZFUnPL6z1v3mK9AfVI1dmxsppNRVr9MdUpMrv85m1Xl4TtBR8ipH/0bs/+tzDTcytd+i7AKyesROzpBOGvVrPpVn9wWYrOLr81AZ4SRMDsXZ1t86EZn1vXm/SYTxViZwf6tZJt2w4bnXtrMiE+CliGKCXt6XnTI5B2ViACZG+2HS25tg54eiki/P5mfXl5bjaVTkcikXg8jn5Po+kju7260tH5woxUq6lWA5UrMq+3m0xliPou9Mf68lwqEq3zwngklV1dQUZ9ydi73T69NXVpB74Sot7Utbwh3zWms6sdVbrrans41zVTn8iHEdGvrnUVLjGeWkWdtoyxo7O39Z11A/HZ7VLE9Xn1//Pp7Eo5ImLMcvy0yrVhHySAFNFuv5yrN+rkKJ5d6SEOlSK2lHEN8fVRQkI5x8fJx7O9nRSyAxhb01fTm90YUERc5/kx8JgsIXZ0rjTfr0bPBgcBECH29Zm2WHtnpYghRcSOju0mLwK2BrsHRcRB00ZD3iTb21NC7Oxo5nBM5AgfIA5uNm6UpFYkVmxiV93VCoBIm2sNfS/M2CFqu6HvJShxoe0WCe2N5cNK9UoQe5tgxi0dAgTE7sGtxr8fUlZqxkaPxmjO0A0a7O4+4+0/a2pbROztWGmoUz3X6rRaINTmEo18pwpFVgTG3t5Gzv+7Bh0ixIhabXM6aEnZkhUb53ByNp0OEHW5pnVQUXHBjL29HasNeYeE1mbQEURd0w0IyoodtSE+9dxgMxgIouGimSNQKmE0YkTug3HPhQExouWMd9sKtC0g9vKeNnZdNiA06M75tqxQKdGj8vU3Oy6LjSBaWtZDBVGH08vX3+RcFgtBtOzwa1S1VvkjvsOACNHi2uXVJJOyvBEpINI+nwaZNSuOxRUezb0bEAhb62OkSvNERIAujOiytdrHSBXp5dZR3/W7sBBg89dp9RTnhbgDgC6Xob0AuSF+Ng7gTuoaaDtAKSLD1L+HADHigKX9AKWIqhdw+9b+ASJXOwJKEVUuwxP9SG0MKEVUt5kaMBLE/oF2mibKFRE3U2pe/d7aD2qXlUw1pRh2/Z99RmJD6x73j8VTs3SNqtyh7iNAjGj91ojPxVHCMlypt4larVaMaH3H9/NEsfg2STdTHb3KzlEPfATResDtg6Tnzi5N9KpRv748xy8IYYWORUWL8G8BK5GRjxuNbF3aK6/7Tfr1OT4HZnHhHFXBxF8I+LANrT4ebjS6sUnviaV4JCJFvz7Lo8um6PGUglnxEAEiRN8D+7tH5/sGxYvwSkQcdjPPgVG41pA9Kz4M+zCij30QRucHy+76XyIicWBcUXa/mMCAWMyDcKOvdNdfitgoR8TxYbOsbxQRLjXk9dPDQADzBY4Y3za6KbnrB5n0l5eXXSbgLCHq11nNmKX9VJY//RYKYMQAax89F26KSTBDn2l+rTRBRNbmu0RGEubHekhP+2mnDH+aHw5g+YYZ/1vLL/urBKPE5y4pI0bUz7G9XVzop6/P+19ChDDE2EfvJYBnhRr/KL0MjDgKVb/M9oa0n3a+6mwKI8PYiMOMfXRTS+/6B7sv63WG6LoYVaxfZ3vLFZnO5jA0jBGH2fxoTgd3/YPdfbXsJyj9lhNiRJ6zuZsaxgp9YXqzHR0NZ9DKuQaYN/HpqHTe76zvtAKhECHMsLzVvUEIZ5B3Sp4SEedZ3jYqZ2VzNBXCiCNMbmbDAOEM2kG5XT3SJSAyzf2Cs6nXSGAkhHXI8j4JA4QzaC/kzzdRAbGLabtBo6fqGPHIP4IRp+5Y3ubCAOEMCgBLiGzeJkWjimtP+8MjSKERJhPuWmjEhrIVQ5zOiyammZ+G+dU0IjYh0hTLrjBqgYgNw2uzRKUEd2NiCepK0fD3Wu40NDWFCZlMmCMBDTqb8oibOUBk66c0HrWGEfdnpjCin8WEBQtEbORUvHadIrKc4KQgqriGEQ/9U1gBhjfQ5CzEhqpuU+OwRmUzYgfEhldd2MRmCKCfZS4suEhQikVdRMMcRWQyIs0oqjbrfJkhNhxmaF5zT+JubDp1O69oF+ymmFY2EOFfbYuRmfL7EaKf6fQJwm5UmlAwol7P8hGyYMTel//JR2N+rKk8Q+v7EFmk+j41Sk8ZWYLH0VaYML70NVczGHDmD4bGhcibe9UNLBNEE5OvWYVu+sLX5MMzGHGM6QwYAF1KJ/uS0nYwIsuHSNGssMqVwzEiRIgjLG0XILbIwNAE+BoT06UG7aaVi1P/GCKcGTtmaXqXELo+MzQxTw412BanWZplW/7T2OgYRgyz+Bk0DHH0lIslOGzNjhHZBmKcJqKWT4m34TGEOPaBpWWNBYKLWI4ho5Bo28X0OWgeank3/YAJx8JMnTRKo6eYPl0XHPgzZY1kq3jTGAEcY+ukCRI+5WK7NV6HSw0mVxOnKzfpf9PxNCFk66QFEgM3wBZGfAYJxWyH/FW66dUoNmL4lqnd/X5sxAEWV0qcKSZkS4nLgq9ZLf0kMxYOI8TRGFO7e/0kBo4tUnoObt/Y7tvSdG1a+knRE8byMzULcX6cCBnTbmHO7ymN5lvPKAIcvWJrFiIZ+3kQ2hkJYW3aUxqIH6ZHEeI043UTJWQLMZq3cxiHcJghHYgTo0hhD9NcgTyNEUcy9jN6GjsHXyoua4TvY0PTBJGtVU3BioM1+xnnQ3IBbmeNJwLAHmHhdjwxjRCnGYchjUftf8/UyCXc8bPGEtGBKLjkK880QvQwLdmQohCs6WK5t4pCYJiJOXKBdNOeVfrtNSacnmCbDZEOSLgmU6RYBMJSNlk/SqRHuoPKeAihh+nOEOsdELIEpG4AIXuKY5mriQ1hRM8Nc6t7EFXM4mouCWEfe52NlR6Jq7mb9CBED6ujQa7GB0ZkaAJi4PrYgxZXgRBmnVtkQ49ngm3ZTdRPAqet6k+z1khJnz6mkyhQlhTW6oGD4a+EcIjpWhT0YMWIRvXzxSYEhzEdeoNSpAwcdaY3QMjsStGc7yOx4aq9aQSC4AY5xA9HoKIf2ednRicm8EBkXLMRHeDg8H6jWl9zBoTMc4WG7PMxYwf+Oj+B5Jm45tCs5huJ8DeqNGKClvThUs+gA8oV4pOM2CRGnGCfLJCiRhLhr3IkXpJIxkE7l2D+Faisib1y0TuEAIe+8mhW8+AjiKoCxM9prB8HP6PB0wURHtKL3iGEOPknl3aFPA2jcjtEhXBUPvkY20CIJ8RbRDg0MclhOsT65iOIVuX9dJMScqoqkgVCvM1fwIRDk4t8GtYYKaLSjfCulpqQ0+eYhRKweMr/QQi9HCZ8okIAOqpP2QJ8S0drT6m/mitXqkT4FQiLnFrGzkY54rmOxqNyK5ySBsJV9OW/3kncS7kRCjlTRgV5fedCQKqaOJzqSveIhN+9kwhxksOijSrvExDlHrvRCmnd3QqD4eopAjbEy7YbRIjEjxCnTdGOKm/5tmOjFcS0vAahhi5MgfCaO6FmT0C0Drz+mQvdQgUxLc/CG/GGEiJEq5CiuVO/40XvbTpaQUzHtb5W/E0lIY+tRUl7wz4B0VhnNEZ3bTYdjUc18C2dEoea6JjwNyH0crUhziMWEBHj5+p7jcS9xULLayFxrg0Th+rvQOhtAKEm0S8g9uNF3LfKAVnYvcBBcLS8Fv8KaRFS4B4IgxiRO6FG8yUgIKJtv9Hoev95b7+QSCQK+3uf39lcQu0pLIYwqlqKwHMKMOF3ROhtBKFmj65Rjf1lIsVEaN0igmhrRIW0yNtyQm+Q35pGovdliLSMCJT0sYiIFn4LGYnSQIjTcL4SwnFeK29Rmf2Hg9JYLCG6XiBqc7vn3IuLSAh/jDeAMP/twBegGeH1EXHELQ6Gy3Gul50CQry3OAXCZ36NJx6soWGSaWuthyhhxKHhNsvFLkeHOksI3+IIuRMn7qbjC5xazh8djpAkTV9VRKHkTUVHhUnDYONnyTkgxHv8Z2cQIQZ/cGm38CU0EoI8WwERfiEZBw4O3hMduAb6+ys9KsyLBu09n+X3NhDigIA7RBj0Br9zaHXPNzVCsvskiGgRfvDl236h0jZoWtzdubC4yuZFWh+Vx+SxDIT4rC2GCYPB38xtHg37R0KQvwiMw8PWg4f9+mMrsb/7zuCyWKSIOkM3+yJ8nTy35y0+L80HxzHhT8YWjwI4ayokIoZCB99eGK66ooXddxaXRYKoZWd8A48mwmfemV+E0Mu0uUD2IzlTkL8YGpn6Y0+Zy4ju51yQb0M3Uzq2vhqFxy/1kG9+jmNEJ8OyLfaB5NtQxJGRQ3UX3fs5m6WEqDVcMPicCDxpCmJMvzsxolP1gWn+zzHImCKI/sCD+lktsXthKSFqdfeq544UEELu9CkiHA861U6IR/4xkm0DWVOHrGuj8wuLiNit61Z7oz8HhBASv+hAhONOdVcz+avwDCTbIDz/IY+SPYUcMGJErW5TnRmXyQPRaLmNIiEcV+VMj8JjJE+D6JDXDqyQM9B0aVzfXpUZ1+G5bxDykHE6iRGVx9NkrqZJEgPJtuFiP0HIjgJit6rRCI+1E2L+fxFCh+IdYsxPAuBJKgpT2mI1nesMWuExBbIT+0Wl9QTxDf32uwMjOk8UtnLsgQj/sZmx8BelH0GG7sUnMXQrLuQ/qyedVChDceLG/dSpcGX6pydMCcMfGnAEosHPezFoKaJO4Y3NMjycUIhNLCadCNE5rqSJzAcSGz7GHuJfT7sG0YrKfCo8f1EvxlYhGyJEtwJL5K9J4DRCHPU3xoAgZEbhTkPJ7XfcBIjiD347MKJD/jY/5oGo4nB4miklU4ZwoRR6MyXf36wBYSkv6C9iRPkDsYiDGUeJeLvQl9rQic+2kb1OXYZKKaUkPzIQnU6vzNffTZCA1NHR6XAje6ighFYxYheUESlFj2U+EUKZMyKO1pwmMbc3zEG3shTNCSV9ZF4wpkl1Bv1byY+eyEB0n8p5OQlHxYgT7BGpcrWjDJFmvUuLMp2YiRHlLE2LJM4PIQ7xiTGSpzObko56CdnE0uSpmBuM+Pqwyk8MASGvECOZ2hURX580aFp/eZrmRyB8dY+YmcBBcDgctbmAGs2W0FEHX0Wcg3Tp8mTiv8wY0fHxtRdfTw6RYM0mWxBLQNS+epFzSRJtKxLCY0kHRky+0k1JdBEi9DYfsNRRta9cNsbtkC5dEQ4/7sCIr3jT2yAOnxriFcioVGcGWTsNmsJYmQ++kMSIjrqr77vxSUI4yScWVbnu6dSvq+tQaQXYyqoFeUzocJrrHCTlcUQDBuQSTqxKOWF1U8fbpGiV2xf/5G83RnQ/1X4pBE8NTU40ZyVTVXQBp60T7L4OhC/LMjwTIzocNX3NwjiJu2nIjb9sJehOo3Z0UdReKws184kY0VzL1xTHIbIoyCvUVp3O6X5RW2srtQWE1eoUPYIRa/kaDwlKmeR0z6heZ2BFba1YYijDbK8WDl8EwmT1ffACuQuf9LJeUbHrAg42avRTSO8z2avmhv1tJoifqv1djAB6veN8w9/UKEqPp6r3UxMkMF5WfendEhmJyWoD7TcQjis9cWyEtuB4qqo/XRskgH01csGDZozorrI4XSR3/d5g62ZCqXL02qbKBSN9SEGtemjPSbe7uhG9+IYREbZyoigpAafh2u4XfwP5i/a+mgULPpkx4ksjnsJVv+oLON7agtNw3YsCFTR/sXaG5gkyovulO82QK9Rg8Bf3j6pWF/QKtWJltkbzF+vcVmEjuh3uYPlPf5Ar1KCDe+ibap3DzVTlWb998BUTUiO6Hcmy7hgjV1OK7zUaqhy9Xywz4hbNX6x74UiMiBCli+sfcIPKEsrAXQlajllqxOggzV+s+8rnJUzoTj6WfpR3khvUtjIhXL1hK0qMeEYL+b9S+eUfMyCWDodP3UDYTiYUjKiTrN0KNLvvtSziYpIgmkt+k5zCKbjUaJJonoZO/EGOEr6aCP4EiKKzOYE7jdfOqJquKARsGAS3sgX5izKS3/JmMyDSNfYvuHljD+zjLYjX0F3Ad1EtfZ6GjFvGv5YIohlWNvRaKtmQQHcmFVzS0ug5eGSIvIC/X2DF5F/4m0e3vKPiFuiCxMAZyOnplk5J/mJxCRDNRXy2Qc5Rk+2wa6rUBoT54XO3hJC/KPOa+BEQsT+l51PO1m98XyqqgwL352TfL/uRKESfkgQx+aR5Ivt+d7tNFaB7iCveEe76tReyX0r6KUJcOoETxnrnxC0UFPHX6TZsdEusIHTqlCKS/WKNo5s2kE4SHK7VGhQFTv2TNNN5ESGaH19/QUt0L40N1ylLn8LzvojYhpMhqOCSGlFhBOPiUgnR3ZjPx0E2i4ioPMn2UUQ017mtabF2xDwNm4qiojAU8aTBMemLs85dNNvGpiaHMeOmiG07DPFApFmoWlUvLwKh2exoxxUNVtRGExgNKhMgqLcxmz+18E60jqIGF2S+WVSn1yyIiO1oRQposbgYalFSh2pOBtsPsQTIVJv5SUBsu44atQ1AgqaLrQi85u827ahRywAk2rqYc93/ERDd7TRpJFxCvjSHx9uLiG20hyoIydIDHAA1GRGxbRY3+0LpCS6AGokVl2QFETdc34w0r5+xdrhEortZaodj03dWmtTPD7A0abiTH1t99p0/sNK6BUbGaaJcjyKiu7UxUftGK63OYGQr4P9CwgLObV5q5ZnG54CVFqBgKhteVc9Jcb/Ysp6aOAiIhZl45nNSFR0CotndmiPwPagGQ+rA8S4rRSRMjPhO4+/mr+Gi78V6Nz625y/UkeTspuk3GUekoA9B9HH2MVI9m8Vz1OTHZq5TEwchod6Nj6Hmuwzl/1kSEM3mx6btqB5wsRSochM44F5SqkKnS0nhHDVpbk5XPRoOifVuAmwP6pGlu09L4lFxsgkx0fuHI2JJn+FDjvU/6+hRRHSg4dhYxv3DqVLVomGmB90qUTG4JF7bNJQR8Y3Qkj6BQOiwIZNgDZ2akwIiYgw2ZuN4h8sWCVWLQs0YgVLF0HZDQHQ4ksFT3iu5/AMtW0QQQyNfGu1CX6r4CxjpNbHjiechx/4fU/5S1aLQVJM8TKWeP5GuCogOt3mckyHzx1Nj8JBwQJwKcN9HyNYCYaSITux1Flgh88cfwmN+sWoRLsvU+Jz/OsogxhKiE0G6f56qX87Fbj+EcU0fv4jYYj6iE7QCKCESSu/Ts3JTxo6u/ORhoTNC1aIp/8xw6/mwFv9JJt0SRELpfDopyl23ZorHV6Oe6VGh3g0gzsxwLVvEpuLjJ2AUEcfHEabz4/eFxVi+NmgmHzu6vbqemMB4YaHeDVQtmvrS6kOvcmWefyaT5YgkOBwp+PHn9x8LJ4t3xWIMVCzeLR4v/Pj35tozidP7p4VKKQJiOHx1125XQUj5hfGkucQIiEEq+NrrhSRG8ifOCqcFKKSI4fDo1HF7XQNJFDv96BAhJYiQ+AZ0kEw8BHn9ngrE0enwh+P26p0vFDt5CiahCEVNxKGqiNMez9jVUZvjgTLFhd9uQikX0eOZGPJ8vY214dirrdjz4y8n6bDAWAMRZ79PeK7/aPeuWUOZ4uLC95+/gk4wpwSU4nqub77e3v034SRCk15x8WTh9Me/37/f3Fzf3Nz8+/XH6cLtYrHeVPl/ydb/AJc21O1ZjI9PAAAAAElFTkSuQmCC"
                        alt="Richard Nevoreski"
                      />
                      <span class="avatar-badge bg-dash-color-1"
                        ><i
                          v-if="authUser.id_kyc == 'Yes' ||authUser.ad_kyc == 'Yes' ||authUser.ec_kyc == 'Yes' "
                          class="fa fa-check"
                        ></i>
                        <i v-else class="fa fa-times"></i>
                      </span>
                    </div>
                    <h3 class="h3 mb-0">{{ authUser.name }}</h3>
                    <p class="text-sm fw-light">{{ authUser.email }}</p>
                    <div
                      class="d-inline-block py-1 px-4 rounded-pill bg-dash-dark-3 fw-light text-sm mb-4"
                    >
                      Client ID: {{ authUser.id }}
                    </div>
                    <ul
                      class="list-inline text-center mb-0 d-flex justify-content-between text-sm mb-0"
                    >
                      <li class="list-inline-item">
                        <i class="fab fa-blogger-b me-2"></i>150
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-code-branch me-2"></i>340
                      </li>
                      <li class="list-inline-item">
                        <i class="fab fa-gg me-2"></i>460
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row gy-3 align-items-center">
                    <div class="col-md-6 col-12">
                      <div class="col-lg-10">
                        <div>
                          <b for="">Name: </b><span>{{ authUser.name }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Date of birth: </b
                          ><span>{{ authUser.birth }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div><b for="">Password: </b><span>******</span></div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Mobile Number: </b
                          ><span>{{ authUser.Phone }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Communication Language: </b
                          ><span>English</span>
                        </div>
                      </div>
                      <div class="col-lg-10 mb-3">
                        <div>
                          <b for="">Country: </b
                          ><span>{{ authUser.country }}</span>
                        </div>
                      </div>
                      <button
                        class="btn btn-primary"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        Edit
                      </button>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="row gy-3 r justify-content-center">
                            <div class="">
                              <div
                                class="card mb-0"
                                style="border: solid white 2px"
                              >
                                <div class="card-body">
                                  <div
                                    class="d-flex align-items-end justify-content-between mb-2"
                                  >
                                    <div class="me-2">
                                      <p
                                        class="text-sm text-uppercase text-gray-600 lh-1 mb-0"
                                      >
                                        Proof of ID approved
                                      </p>
                                    </div>
                                    <p
                                      class="text-xxl lh-1 mb-0 text-dash-color-1"
                                    >
                                    {{authUser.id_kyc}}
                                    </p>
                                  </div>
                                  <div
                                    class="d-flex align-items-end justify-content-between mb-2"
                                  >
                                    <div class="me-2">
                                      <p
                                        class="text-sm text-uppercase text-gray-600 lh-1 mb-0"
                                      >
                                        Proof of Address approved
                                      </p>
                                    </div>
                                    <p
                                      class="text-xxl lh-1 mb-0 text-dash-color-1"
                                    >
                                    {{authUser.ad_kyc}}
                                    </p>
                                  </div>
                                  <div
                                    class="d-flex align-items-end justify-content-between mb-2"
                                  >
                                    <div class="me-2">
                                      <p
                                        class="text-sm text-uppercase text-gray-600 lh-1 mb-0"
                                      >
                                        Economic Profile Details approved
                                      </p>
                                    </div>
                                    <p
                                      class="text-xxl lh-1 mb-0 text-dash-color-1"
                                    >
                                    {{authUser.ec_kyc}}
                                    </p>
                                  </div>
                                  <div class="progress" style="height: 3px">
                                    <div
                                      class="progress-bar bg-dash-color-1"
                                      role="progressbar"
                                      style="width: 30%"
                                      aria-valuenow="30"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade text-start"
        id="myModal"
        tabindex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">Update Profile</h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form enctype="multipart/form-data" @submit.prevent="userUpdate">
                <div class="mb-3">
                  <label class=" " for="modalInputEmail1">Date of birth</label>
                  <input
                    class="form-control"
                    id="modalInputEmail1"
                    type="date"
                    v-model="birth"
                  />
                </div>
                <div class="mb-3">
                  <label class=" " for="mobile">Mobile Number</label>
                  <input
                    class="form-control"
                    id="mobile"
                    type="text"
                    v-model="phone"
                  />
                </div>
                <div class="mb-3">
                  <label class="" for="profile">Profile</label>
                  <input
                    @change="image"
                    class="form-control"
                    id="profile"
                    type="file"
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="defaultCheck1"
                    type="checkbox"
                    v-model="checkbox"
                  />
                  <label class="form-check-label" for="defaultCheck1"
                    >I Need Change Password</label
                  >
                </div>
                <div v-if="checkbox">
                  <div class="mb-3">
                    <label class=" " for="modalInputPassword1"
                      >New Password</label
                    >
                    <input
                      class="form-control"
                      id="modalInputPassword1"
                      type="password"
                      v-model="password"
                    />
                  </div>
                  <div class="mb-3">
                    <label class=" " for="modalInputPassword2"
                      >Confirm Password</label
                    >
                    <input
                      v-model="password_confirmation"
                      class="form-control"
                      id="modalInputPassword2"
                      type="password"
                    />
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">
                  Save changes
                </button>
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
            </div>
          </div>
        </div>
      </div>
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import { RouterLink } from "vue-router";

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";

import axios from "axios";
export default {
  data() {
    return {
      authUser: [],
      checkbox: "",

      password: "",
      password_confirmation: "",
      profile: "",
      birth: "545",
      phone: "2323",
    };
  },
  methods: {
    image(event) {
      this.profile = event.target.files[0];
    },
   async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("birth", this.birth);
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("profile", this.profile); // Append the file to the FormData object

     await axios
        .post("/api/user/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          this.authUser = response.data.user,
          this.$notify({

            
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });

        });

      this.$setLoading(false);
    },
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }

    this.birth=this.authUser.birth
    this.phone=this.authUser.Phone

    this.$setLoading(false);
  },
};
</script>
 
<style scoped>
@import "./../../assets/main.css";
label {
  font-weight: 500;
  color: rgb(230, 234, 238);
}
</style>