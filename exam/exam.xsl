<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
		<body>
		<h1 align="center" >EMPLOYEE MANAGEMENT SYSTEM</h1><br/>
		 <div style="float:center;" ><table border="1" align="center">
    		<tr bgcolor="red">
    		<th style="text-align:left">ID</th>
      		<th style="text-align:left">Name</th>
		      <th style="text-align:left">Age</th>
		      <th style="text-align:left">salary</th>
		      <th style="text-align:left">EMail</th>
		      <th style="text-align:left">Phone</th>
		      <th style="text-align:left">Designation</th>
		      <th style="text-align:left">Promotion</th>
		    </tr>
		    <xsl:for-each select="company/employee">
		    
		    <tr>
		    					<td>
                    			<xsl:value-of select="@aid"/>
                                </td>
		    					<td>
                    			<xsl:value-of select="Emp-name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-age"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-salary"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-emailid"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-phonenum"/>
                                </td>	
                                <td>
                                    <xsl:value-of select="Emp-designation"/>
                                </td>	
                                <xsl:choose>
									<xsl:when test="Emp-age >= 50">
									<td>Associate Project Manager</td>
									</xsl:when>
									<xsl:when test="Emp-age >= 40">
									<td>Team Leader</td>
									</xsl:when>
									<xsl:otherwise>
									<td>Developer</td>
									</xsl:otherwise>
								</xsl:choose>
		    </tr>
		    </xsl:for-each>
		   	</table>
		    </div>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>