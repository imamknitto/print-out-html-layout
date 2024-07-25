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

const HeadItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <Flex>
      <span className="ktext-size-11" style={{ width: "2.5cm" }}>
        {label}
      </span>
      <span className="ktext-size-11">: {value}</span>
    </Flex>
  );
};

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
                    <th
                      style={{
                        padding: 0,
                        fontSize: 11,
                        textAlign: "left",
                        fontWeight: 400,
                        width: "35%",
                      }}
                    >
                      <Flex vertical gap={10}>
                        <HeadItem label="Nama" value="ELA TEST" />
                        <HeadItem label="Kota" value="Bandung" />
                        <HeadItem label="Telp" value="62813773338822" />
                        <HeadItem label="Alamat" value="JL HOLIS NO 35" />
                      </Flex>
                    </th>
                    <th
                      style={{
                        padding: 0,
                        fontSize: 11,
                        textAlign: "left",
                        fontWeight: 400,
                        width: "40%",
                      }}
                    >
                      <Flex vertical gap={10}>
                        <HeadItem label="Order Dari" value="TOKO" />
                        <HeadItem label="Angkutan" value="CUSTOMER" />
                        <HeadItem
                          label="Ongkir Dibayar"
                          value="CUSTOMER - DIBAYAR SAAT TERIMA"
                        />
                        <HeadItem label="No Order" value="OH040524006" />
                      </Flex>
                    </th>
                    <th
                      style={{
                        padding: 0,
                        fontSize: 11,
                        textAlign: "center",
                        fontWeight: 400,
                        width: "25%",
                      }}
                    >
                      <Flex justify="center" align="center" vertical gap={10}>
                        <Flex vertical gap={2} justify="center" align="center">
                          <span className="ktext-size-16">Kode Verifikasi</span>
                          <span className="ktext-size-16">424</span>
                        </Flex>
                        <Flex vertical gap={2} justify="center" align="center">
                          <span className="ktext-size-11">Admin</span>
                          <span className="ktext-size-11">Ella</span>
                        </Flex>
                      </Flex>
                    </th>
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
                  fontSize: 11,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                No
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 11,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 11,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 11,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Address
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 11,
                  border: "1px solid #000",
                  textAlign: "left",
                }}
              >
                Role
              </th>
              <th
                style={{
                  padding: 10,
                  fontSize: 11,
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
                      fontSize: 11,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 11,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    John Doe {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 11,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    Email {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 11,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    Address {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 11,
                      border: "1px solid #000",
                      textAlign: "left",
                    }}
                  >
                    Role {idx + 1}
                  </td>
                  <td
                    style={{
                      padding: 8,
                      fontSize: 11,
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
                style={{
                  padding: "15px 0 0 0",
                  fontSize: 11,
                  textAlign: "center",
                }}
              >
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Page 1 of 1
                  </span>
                </div>

                <Flex justify="end" gap={100}>
                  <span className="ktext-size-11">OH040524006</span>
                  <span className="ktext-size-11">
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
