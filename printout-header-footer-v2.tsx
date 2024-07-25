/**
   Print out HTML component for React JS/TS.
   
   # Tech stack: Preact, AntDesign, dayjs, react-to-print library.
   
   # Description:
     Print Out layout using table, with header for each page, 
     and fixed bottom footer.
  
   # Example usage using react-to-print library:
     In your main component:
       1. Create useRef:
         const printExampleRef = useRef(null);
      
       2. Create print handle function:
        const handlePrint = useReactToPrint({
          content: () => printExampleRef.current,
          pageStyle: `@media print {
            @page {
              margin: 0;
              size: 250mm auto;
            }
            .main-wrapper {
              margin: 0 1cm;
            }
            .footer-fixed {
              position: fixed;
              bottom: 0.5cm;
              right: 0.88cm;
              width: auto;
            }
          }`,
        });

       3. Place this component to your main component:
        <div style={{ display: 'none' }}>
          <PrintOutExample
            ref={printExampleRef}
            data={Array.from({ length: 50 }, (_, index) => ({
              id: index + 1,
              name: `Item ${index + 1}`,
              value: Math.floor(Math.random() * 100),
            }))}
          />
        </div>

        NB: Both data props and DUMMY data are examples for map data to table body.
 */

import { Flex } from "antd";
import dayjs from "dayjs";
import { forwardRef } from "react";

const DUMMY = Array(80).fill(null);

interface PrintOutExampleProps {
  data: Array<{ id: number; name: string; value: number }>;
}

const PrintOutExample = forwardRef<HTMLDivElement, PrintOutExampleProps>(
  ({ data }, ref) => {
    return (
      <div ref={ref} className="main-wrapper">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th colSpan={6} style={{ padding: 18 }}></th>
            </tr>
            <tr style={{ padding: 0 }}>
              <th
                colSpan={6}
                style={{
                  padding: "0 0 7px 0",
                  borderBottom: "1px solid #c7c9c8",
                }}
              >
                <table
                  style={{
                    padding: 0,
                    borderCollapse: "collapse",
                    width: "100%",
                  }}
                >
                  <tr>
                    <td
                      style={{
                        padding: 0,
                        fontSize: 8,
                        textAlign: "left",
                        fontWeight: 400,
                        width: "30%",
                        verticalAlign: "top",
                      }}
                    >
                      <table
                        style={{
                          padding: 0,
                          borderCollapse: "collapse",
                          width: "100%",
                        }}
                      >
                        <tr>
                          <td style={{ width: "35%", padding: 3 }}>Nama</td>
                          <td style={{ width: "65%", padding: 3 }}>:MAHMUD</td>
                        </tr>
                        <tr>
                          <td style={{ width: "35%", padding: 3 }}>Kota</td>
                          <td style={{ width: "65%", padding: 3 }}>
                            : Bandung
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "35%", padding: 3 }}>Telp</td>
                          <td style={{ width: "65%", padding: 3 }}>
                            : 6281392838488
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "35%", padding: 3 }}>Alamat</td>
                          <td style={{ width: "65%", padding: 3 }}>
                            : JL Holis No 35
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td
                      style={{
                        padding: 0,
                        fontSize: 8,
                        textAlign: "left",
                        fontWeight: 400,
                        width: "50%",
                        verticalAlign: "top",
                      }}
                    >
                      <table
                        style={{
                          padding: 0,
                          borderCollapse: "collapse",
                          width: "100%",
                        }}
                      >
                        <tr>
                          <td style={{ width: "40%", padding: 3 }}>
                            Ongkir dari
                          </td>
                          <td style={{ width: "60%", padding: 3 }}>: TOKO</td>
                        </tr>
                        <tr>
                          <td style={{ width: "40%", padding: 3 }}>Angkutan</td>
                          <td style={{ width: "60%", padding: 3 }}>
                            : CUSTOMER
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "40%",
                              padding: 3,
                              verticalAlign: "top",
                            }}
                          >
                            Ongkir Dibayar
                          </td>
                          <td style={{ width: "60%", padding: 3 }}>
                            : CUSTOMER - DIBAYAR SAAT TERIMA
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "40%", padding: 3 }}>No Order</td>
                          <td style={{ width: "60%", padding: 3 }}>
                            : OH040524006
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td
                      style={{
                        padding: 0,
                        fontSize: 8,
                        textAlign: "left",
                        fontWeight: 400,
                        width: "20%",
                      }}
                    >
                      <Flex justify="center" align="center" vertical gap={10}>
                        <Flex vertical gap={2} justify="center" align="center">
                          <span className="ktext-size-11">Kode Verifikasi</span>
                          <span className="ktext-size-11">424</span>
                        </Flex>
                        <Flex vertical gap={2} justify="center" align="center">
                          <span className="ktext-size-8">Admin</span>
                          <span className="ktext-size-8">Ella</span>
                        </Flex>
                      </Flex>
                    </td>
                  </tr>
                </table>
              </th>
            </tr>
            <tr>
              <th colSpan={6} style={{ padding: 4 }}></th>
            </tr>
            <tr>
              <th
                style={{
                  padding: 10,
                  fontSize: 10,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                No
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 10,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 10,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 10,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Address
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 10,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Role
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 10,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Experience
              </th>
            </tr>
          </thead>
          <tbody>
            {DUMMY.map((_, idx) => {
              return (
                <tr key={idx}>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 10,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 10,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    John Doe {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 10,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    Email {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 10,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    Address {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 10,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    Role {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 10,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    7
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6} style={{ padding: 25 }}></td>
            </tr>
            <tr className="footer-fixed">
              <td
                colSpan={6}
                style={{ padding: "15px 0 0 0", textAlign: "center" }}
              >
                <Flex justify="end" gap={80}>
                  <span className="ktext-size-10">Page 1 of 1</span>
                  <span className="ktext-size-10">OH040524006</span>
                  <span className="ktext-size-10">
                    {dayjs().format("DD/MM/YYYY HH:mm A")}
                  </span>
                </Flex>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
);

export default PrintOutExample;
