<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
	<html>
            <body>
                <h1 align="center">RISE ABOVE</h1>
                <div class='School' style="float:center;">
                    <h2 align="center">CONTACT</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">NAME</th>
                            <th style="text-align:left">PHONE.NO</th>
                            <th style="text-align:left">EMAIL</th>
                           
                        </tr>
                        <xsl:for-each select="SCHOOL/rg3_DETAILS">
                            <tr>
                                <td>
                                    <xsl:value-of select="rg3_ID"/>
                                </td>
                                <td>
                                    <xsl:value-of select="rg3_Name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Subject"/>
                                </td>
                                
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
	
	
	</xsl:template>
</xsl:stylesheet>